import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '../components/theme-provider'
import HomePage from '../app/page'
import AppDetailsPage from '../app/apps/[slug]/page'
import BrandsPage from '../app/brands/page'
import BrandDetailsPage from '../app/brands/[slug]/page'
import CollectionsPage from '../app/collections/page'
import CollectionDetailsPage from '../app/collections/[slug]/page'
import ComparePage from '../app/compare/page'
import DiscoverPage from '../app/discover/page'
import TrendingPage from '../app/trending/page'
import NewPage from '../app/new/page'
import ProfilePage from '../app/profile/page'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans antialiased">
      {children}
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/apps/:slug" element={<AppDetailsPage />} />
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/brands/:slug" element={<BrandDetailsPage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/collections/:slug" element={<CollectionDetailsPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/trending" element={<TrendingPage />} />
            <Route path="/new" element={<NewPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}
