"use client";

import React, { useState } from "react";

interface PortalsMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdmissionInquiry({ isOpen, onClose }: PortalsMenuProps) {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    classFor: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry submitted successfully!");
    onClose();
  };

  return (
    <div 
      role="dialog" 
      aria-label="Admission Inquiry Form"
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-100"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-8 w-[95%] max-w-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Admission Inquiry Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Student Name */}
          <div>
            <label className="text-sm font-medium">Student Name</label>
            <input
              type="text"
              name="studentName"
              value={formData.studentName}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black/60"
            />
          </div>

          {/* Parent Name */}
          <div>
            <label className="text-sm font-medium">Parent Name</label>
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black/60"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black/60"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black/60"
            />
          </div>

          {/* Class Applying For */}
          <div>
            <label className="text-sm font-medium">Class Applying For</label>
            <input
              type="text"
              name="classFor"
              value={formData.classFor}
              onChange={handleChange}
              required
              className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black/60"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full mt-1 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-black/60"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-black text-white font-medium hover:bg-gray-900"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
