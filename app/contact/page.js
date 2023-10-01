import React from "react";

function ContactUs() {
  return (
    <div className="bg-gradient-to-b from-gray-100  to-gray-200  flex flex-col py-12 items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4">Bize Ulaşın</h2>

        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Adınız
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-gray-300 border p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              E-posta Adresiniz
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 border p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600"
            >
              Mesajınız
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full border-gray-300 border p-2 rounded focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold p-2 rounded hover:bg-blue-600"
          >
            Gönder
          </button>
        </form>
      </div>
      <div className="w-full md:w-2/4 mt-8">
        <div
          className="aspect-w-2 aspect-h-1"
          style={{ maxWidth: "100%", width: "100%" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448.638124100058!2d31.149657633550177!3d40.84848521668518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409d9ffbfcf386c3%3A0xdeb87856204b7f20!2zWWVuaSwgRDEwMCBZYW55b2x1IE5vOjQxMCwgODE2MDAgRMO8emNlIE1lcmtlei9Ew7x6Y2UsIFTDvHJraXll!5e0!3m2!1sen!2sca!4v1696131438903!5m2!1sen!2sca"
            title="Google Maps"
            width="100%"
            height="450" /* Default height for desktop */
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
