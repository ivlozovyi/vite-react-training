import { useEffect, useState, useCallback } from "react"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"

export default function EffectSection() {
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const fetchUsers = useCallback(async () => {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    },[])

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    function openModal() {
        setModal(true)
    }

    return (
        <section>
            <h3>Effect</h3>
            <Button onClick={openModal}>Show Info</Button>
            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure delectus ullam animi consequuntur consectetur dicta quibusdam doloribus in voluptates placeat. Quis eligendi vero reiciendis dicta ut similique laborum reprehenderit ipsam!</p>
                <Button onClick={() => setModal(false)}>Close Modal</Button>
            </Modal>

            {loading && <p>Loading...</p>}

            {!loading && <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
                </ul>}
        </section>
    )
}