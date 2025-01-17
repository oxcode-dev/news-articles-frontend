import AuthPage from "../pages/Auth";
import ArticlesPage from "../pages/Articles";
import UserSettingsPage from "../pages/UserSettings";
import PreferredArticlesPage from "../pages/PreferredArticles";
import ArticlePage from "../pages/Article";
import NotFoundPage from "../pages/NotFound";

const routes = [
    { path: "/auth", element: AuthPage, isAuthenticated: false },

    { path: "/", element: ArticlesPage, isAuthenticated: false },
    { path: "/articles/:id", element: ArticlePage, isAuthenticated: false },
    { path: "/preferred-articles", element: PreferredArticlesPage, isAuthenticated: false },
    { path: "/settings", element: UserSettingsPage, isAuthenticated: false },

    { path: "*", element: NotFoundPage },
];

export default routes;