import { useState, useEffect } from "react";

export function Grupos() {
const [groups, setGroups] = useState([]);
useEffect(() => {
    fetch("http://localhost:3001/groups").then(
    (res) => {
        res.json().then(setGroups);
    },
    (err) => {}
    );
}, []);

return (
    <div>
    {groups.map((group) => (
        <div key={group.id}>{group.name}</div>
    ))}
    </div>
);
}
