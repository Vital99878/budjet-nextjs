"use client";

import "./LoginForm.css";
import fbAuthService from "@/services/firebase-service-account";

function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-scree">
      <form className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">Вход</h2>
        <button
          type="button"
          onClick={() => fbAuthService.login()}
          className="w-full bg-red-600 text-white py-2 rounded mb-2 hover:bg-red-500 transition"
        >
          Войти через Google
        </button>

        {/* Добавьте другие кнопки для входа через другие сервисы здесь */}
        <div className="mt-4">
          <p className="text-center">Или</p>
        </div>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="password"
          placeholder="Пароль"
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500 transition"
        >
          Войти
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
