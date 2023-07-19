import ProtectedRoute from "../ProtectedRoute";
import One from "./One";
import Two from "./Two";
import Three from "./Three";

function All() {
    return (
        <div>
            <One />
            <ProtectedRoute role={'b1'} allowedRoles={['a', 'b']}>
                <Two />
            </ProtectedRoute>
            <Three />

            <h1>************************</h1>

            <One />
            <Two />
            <ProtectedRoute role={'b'} allowedRoles={['b', 'c']}>
                <Three />
            </ProtectedRoute>

            <h1>************************</h1>

            <ProtectedRoute role={'b'} allowedRoles={['b', 'c']}>
                <>
                    <One />
                    <Two />
                    <Three />
                </>     
            </ProtectedRoute>
        </div>
    );
}

export default All;