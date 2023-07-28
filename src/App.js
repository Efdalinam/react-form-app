import Table from "./components/Table";
import {useState} from "react";

function App() {

	const [users, setUsers] = useState(() => [
		{
			name: 'Efdal',
			surname: 'İnam',
			email: 'efdalinam@gmail.com',
			age: 26
		},
		{
			name: 'Emre',
			surname: 'İnam',
			email: 'emreinam@gmail.com',
			age: 33
		},
		{
			name: 'Hasan',
			surname: 'Hüseyin',
			email: 'hsn@gmail.com',
			age: 35
		},
		{
			name: 'Kemal',
			surname: 'Cemal',
			email: 'onurg@gmail.com',
			age: 26
		}
	])

	return (
		<div className="p-4">
			
			<Table
				searchable={true}
				head={[
					{name: 'Ad-Soyad', sortable: true},
					{name: 'E-posta'},
					{name: 'Yaş', sortable: true},
					{name: 'İşlemler', width: 200}
				]}
				body={users && users.map((user, key) => ([
					<div key={`${user.name} ${user.surname}`}>{user.name} {user.surname}</div>,
					user.email,
					<div searchableText={`Yaş ${user.age}`}>{user.age}</div>,
					[
						
						<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Düzenle</button>,
						<button onClick={() => {
							const tmpUsers = [...users]
							tmpUsers.splice(key, 1)
							setUsers(tmpUsers)
						}} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Sil</button>
					]
				]))}
			/>
		</div>
	);
}

export default App;