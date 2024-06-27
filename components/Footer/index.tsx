import Link from "next/link";

export default function footer() {
  return (
    <main className="">
      <footer className="py-6 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="md:flex justify-between items-center">
            <div className="flex flex-col md:pb-0 pb-4 gap-2">
              <h2>Телефон: +7 (8172) 507-501</h2>
              <h2>Email: info@pechataem35.ru</h2>
              <h2>Адрес: г. Вологда, ул. Зосимовская, д. 9Б, офис 11</h2>
            </div>
            <div>
              <div className="text-lg">
                © 2024 Центр широкой печати Печатаем
              </div>
              <Link className="text-gray-400" href="/privacy">
                Политика обработки персональных данных
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
