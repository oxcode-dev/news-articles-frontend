import AuthPage from "../pages/Auth";
import ArticlesPage from "../pages/Articles";
import UserSettingsPage from "../pages/UserSettings";
import PreferredArticlesPage from "../pages/PreferredArticles";
import ArticlePage from "../pages/Article";
import NotFoundPage from "../pages/NotFound";

const routes = [
    { path: "/auth", element: AuthPage, isAuthenticated: false },

    { path: "/", element: ArticlesPage, isAuthenticated: true },
    { path: "/articles/:id", element: ArticlePage, isAuthenticated: true },
    { path: "/preferred-articles", element: PreferredArticlesPage, isAuthenticated: true },
    { path: "/settings", element: UserSettingsPage, isAuthenticated: true },

    { path: "*", element: NotFoundPage },
];

export default routes;