import React from "react";
import Button from "../../Elements/Button";

function Card({ imageUrl, title, description, mt, onClick }) {
  // Memecah deskripsi menjadi array kata-kata
  const words = description.split(" ");
  // Mengambil maksimal 50 kata dari array
  const limitedDescription = words.slice(0, 20).join(" ");

  // Menambahkan elipsis jika deskripsi dipotong
  const trimmedDescription =
    words.length > 20 ? `${limitedDescription}...` : limitedDescription;

  return (
    <div
      className={`card lg:mb-20 mb-8 sm:h-[300px] ${mt}`}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt="Card"
          className="card-image w-full h-auto rounded-t-xl"
        />
      </div>
      <div className="card-content bg-white shadow pt-2 p-4 rounded-b-xl flex-grow">
        <p className="font-semibold text-base my-1 mb-2">{title}</p>
        <p className="text-[#6F6F6F] flex text-sm tracking-wide leading-loose mb-4">
          {trimmedDescription}
        </p>
        <button
          href="/budaya"
          className="w-full h-10 px-8 font-medium rounded-md text-white transition duration-300 border border-[#5d9981] text-[#5d9981] border bg-white hover:bg-[#5d9981] hover:text-white"
        >
          Lihat Selengkapnya
        </button>
      </div>
    </div>
  );
}

export default Card;
