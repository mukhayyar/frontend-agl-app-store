"use client"

import { ProfileHeader } from "@/components/profile/profile-header"
import { FavoritesList } from "@/components/profile/favorites-list"
import { FollowingBrands } from "@/components/profile/following-brands"
import { FollowingCollections } from "@/components/profile/following-collections"
import { PreferencesForm } from "@/components/profile/preferences-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ProfileHeader />
      <Tabs defaultValue="favorites" className="mt-6">
        <TabsList>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="favorites" className="mt-4">
          <FavoritesList />
        </TabsContent>

        <TabsContent value="following" className="mt-4 space-y-6">
          <section>
            <h2 className="text-lg font-semibold mb-2">Brands</h2>
            <FollowingBrands />
          </section>
          <section>
            <h2 className="text-lg font-semibold mb-2">Collections</h2>
            <FollowingCollections />
          </section>
        </TabsContent>

        <TabsContent value="preferences" className="mt-4">
          <PreferencesForm />
        </TabsContent>
      </Tabs>
    </main>
  )
}
