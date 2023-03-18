import Card from "./Card";

export default function Table(props) {
  const { data } = props;
  return (
    <table className="w-full ">
      <thead>
        <tr className="bg-slate-200 shadow-md border-spacing-0">
          <th>
            <input type="checkbox" className="ml-6" />
          </th>
          <th className="py-3 pl-6 text-sm" align="left">
            Profil
          </th>
          <th className="text-sm">Jurusan</th>
          <th className="text-sm">Pengalaman</th>
          <th className="text-sm">Melamar pada</th>
          <th className="text-sm">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </tbody>
    </table>
  );
}
