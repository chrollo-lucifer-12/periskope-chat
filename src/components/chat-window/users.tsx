"use client";

import { useEffect, useState } from "react";

export default function UsersList() {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch("/api/getUsers");
            const data = await res.json();
            setUsers(data.users || []);
            setLoading(false);
        };

        fetchUsers();
    }, []);

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-lg font-bold mb-2">Users List</h2>
            {loading ? <p>Loading...</p> : users.length === 0 ? <p>No users found.</p> : (
                <ul className="border p-4">
                    {users.map((user) => (
                        <li key={user.id} className="p-2 border-b">{user.email}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
