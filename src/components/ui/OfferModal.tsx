"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface ModalProps {
  message: string;
  id: string;
  fromDashboard?: boolean;
}

const OfferModal: React.FC<ModalProps> = ({ id, message, fromDashboard }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const checkModalDismissal = (id: string) => {
    const dismissedDate = localStorage.getItem(`${id}-modalDismissedDate`);
    if (dismissedDate) {
      const dismissedTimestamp = parseInt(dismissedDate);
      const currentDate = new Date().getTime();
      const diffInDays = Math.floor(
        (currentDate - dismissedTimestamp) / (1000 * 3600 * 24)
      );

      if (diffInDays < 15) {
        setIsModalOpen(false);
        return;
      }
    }
    setIsModalOpen(true);
  };

  const onCloseForm = () => {
    setIsModalOpen(false);
  };

  const handleDontShowAgain = () => {
    localStorage.setItem(
      `${id}-modalDismissedDate`,
      new Date().getTime().toString()
    );
    setIsModalOpen(false);
  };

  useEffect(() => {
    checkModalDismissal(id);
  }, [id]);

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-white p-8 rounded-lg max-md:w-[90%] mx-auto text-center flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <button
            className="float-right font-bold text-2xl"
            onClick={onCloseForm}
          >
            x
          </button>
        </div>

        <h2 className="text-2xl font-semibold">Special Offer!</h2>
        <p className="mt-4 text-lg">{message} </p>
        {!fromDashboard && (
          <Link
            href="/login"
            className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Subscribe
          </Link>
        )}

        <button
          onClick={handleDontShowAgain}
          className="mt-4 px-6 py-2  text-bg-gray-500 rounded-lg underline"
        >
          Don&apos;t show this message again
        </button>
      </div>
    </div>
  );
};

export default OfferModal;
