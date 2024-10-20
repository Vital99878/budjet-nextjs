type Props = {
  name: string;
  value: number;
};

export default function Expense({ name, value }: Props) {
  return (
    <div className="mb-4 flex items-center justify-between p-4 bg-white shadow rounded-md">
      <p className="block text-sm font-medium text-gray-700 mb-2">{name}</p>
      <p
        id={name}
        className="text-right block min-w-10 rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
      >
        {value.toLocaleString('ru-RU')}
      </p>
    </div>
  );
}
