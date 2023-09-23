import React, { useState } from "react";

const About = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleFullContent = () => {
    event.preventDefault(); // Prevent the default anchor behavior
    setShowFullContent(!showFullContent);
  };

  return (
    <div
      id="about"
      className="bg-gradient-to-b from-gray-100  to-gray-200 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800">Hakkımızda</h2>
          <p className="mt-4 text-lg text-gray-600">
            AGEL Alüminyum olarak, inovasyon ve kaliteye dayalı Pencere & Kapı
            Sistemleri konusunda uzmanlaşmış bir şirketiz. Müşterilerimize en
            üst düzeyde hizmet sunmak için geniş yelpazemizle ihtiyaçlarınıza
            anında cevap veriyoruz! Misyonumuz, hızlı, kaliteli ve çevreye
            duyarlı çözümlerle müşterilerimizin beklentilerini aşmak ve
            ihtiyaçlarını karşılamaktır. AGEL Alüminyum olarak, yenilikçi
            tasarımlarla birlikte üstün kalite standartlarını benimseriz ve
            müşteri memnuniyetini en üst düzeyde tutarız.
          </p>
          {!showFullContent && (
            <p className="mt-4 text-lg text-gray-600">
              <a
                href="#"
                className=" text-blue-900/60 hover:text-blue-gray-500 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                onClick={toggleFullContent}
              >
                Devamını okumak için lütfen tıklayınız.
              </a>
            </p>
          )}
          {showFullContent && (
            <>
              <p className="mt-4 text-lg text-gray-600">
                Teknolojik gücümüzü kullanarak sürekli olarak araştırma ve
                geliştirme yapar, sektördeki en son trendleri takip ederiz. Tüm
                süreçlerimizde kalite kontrol önlemlerini sıkı bir şekilde
                uygularız ve ürünlerimizi yüksek kalitede sunmaktan gurur
                duyarız.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                AGEL Alüminyum olarak iş etiği, dürüstlük ve şeffaflık
                ilkelerini benimseyerek, adil ve ahlaki ticaret yapmaya özen
                gösteririz. Müşterilerimize en iyi deneyimi sunmak için onların
                ihtiyaçlarını anlamaya ve çözümler üretmeye odaklanırız.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                AGEL Alüminyum olarak, sürdürülebilirlik konusuna büyük önem
                veririz. Çevreye duyarlı üretim süreçlerini benimseriz ve enerji
                tasarrufu sağlayan çözümler sunarak müşterilerimize katkıda
                bulunuruz.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Sizlere en iyi hizmeti sunmak için buradayız. AGEL Alüminyum
                olarak, müşteri odaklı yaklaşımımızla uzun vadeli iş
                ortaklıkları kurmak ve sektörde lider bir marka olmak
                hedeflerimiz arasındadır.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Bize ulaşarak ihtiyaçlarınızı paylaşabilirsiniz. Profesyonel ve
                tecrübeli ekibimiz, size uygun çözümler sunmak için çalışmaktan
                mutluluk duyacaktır.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
