import './Footer.css';


export default function Footer() {
  return (
    <footer className="bg-indigo-600 text-white p-4 text-center">
      <p>
        &copy; {new Date().getFullYear()} Мое приложение. Все права защищены.
      </p>
    </footer>
  );
}
