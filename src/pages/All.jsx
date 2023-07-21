import ProtectedRoute from "../ProtectedRoute";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import user from "../security/user.json";
import { useTranslation } from 'react-i18next';

function All() {
    const { t, i18n } = useTranslation();

    function changeLanguage(language) {
        i18n.changeLanguage(language);
        localStorage.setItem("lng", language);
    }

    return (
        <div>
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("zh")}>Chinese</button>
            <button onClick={() => changeLanguage("ja")}>Japanese</button>
            <button onClick={() => changeLanguage("th")}>Thai</button>
            <button onClick={() => changeLanguage("ms")}>Malaysia</button>
            <hr style={{color: "#f00", height: "2px", width: "100%"}}/>
            <h2>User role: {user.roles.join(',')} </h2>

            <One />
            <Two />
            <Three />

            <hr style={{color: "#f00", height: "2px", width: "100%"}}/>
            <h2>******* allowed role a,b for {t("one")} ********</h2>

            <ProtectedRoute sid="security-pages-one">
                <One />
            </ProtectedRoute>
            <Two />
            <Three />

            <hr style={{color: "#f00", height: "2px", width: "100%"}}/>
            <h2>******* allowed role b,c for {t("two")} ********</h2>

            <One />
            <ProtectedRoute sid="security-pages-two">
                <Two />
            </ProtectedRoute>
            <Three />

            <hr style={{color: "#f00", height: "2px", width: "100%"}}/>
            <h2>******* allowed role a,c for {t("three")} ********</h2>

            <One />
            <Two />
            <ProtectedRoute sid="security-pages-three">
                <Three />
            </ProtectedRoute>

            <hr style={{color: "#f00", height: "2px", width: "100%"}}/>
            <h2>******* secure {t("all")} ********</h2>

            <ProtectedRoute sid="security-pages-one">
                <One />
            </ProtectedRoute>
            <ProtectedRoute sid="security-pages-two">
                <Two />
            </ProtectedRoute>
            <ProtectedRoute sid="security-pages-three">
                <Three />
            </ProtectedRoute>


            <hr style={{color: "#f00", height: "2px", width: "100%"}}/>
            <h2>******* allowed role d for {t("all")} ********</h2>

            <ProtectedRoute sid="security-pages-all">
                <One />
                <Two />
                <Three />
            </ProtectedRoute>

        </div>
    );
}

export default All;