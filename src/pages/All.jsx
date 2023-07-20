import ProtectedRoute from "../ProtectedRoute";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import user from "../security/user.json";

function All() {
    return (
        <div>
            <h2>User role: {user.roles.join(',')} </h2>

            <One />
            <Two />
            <Three />

            <h2>******* allowed role a,b for one ********</h2>

            <ProtectedRoute sid="security-pages-one">
                <One />
            </ProtectedRoute>
            <Two />
            <Three />

            <h2>******* allowed role b,c for two ********</h2>

            <One />
            <ProtectedRoute sid="security-pages-two">
                <Two />
            </ProtectedRoute>
            <Three />

            <h2>******* allowed role a,c for three ********</h2>

            <One />
            <Two />
            <ProtectedRoute sid="security-pages-three">
                <Three />
            </ProtectedRoute>

        </div>
    );
}

export default All;