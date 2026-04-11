import { useUserProfile } from "@/hooks/use-user-profile"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function PreferencesForm() {
  const { state, setPreferences } = useUserProfile()
  const { installer, includeRemoteAdd } = state.preferences

  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="installer">Preferred installer</Label>
          <Select value={installer} onValueChange={(v) => setPreferences({ installer: v as any })}>
            <SelectTrigger id="installer" aria-label="Preferred installer">
              <SelectValue placeholder="Select installer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="flatpak">Flatpak (default)</SelectItem>
              <SelectItem value="gui">GUI (appstream/flathub link)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="includeRemote">Include remote add</Label>
          <div className="flex items-center gap-3">
            <Switch
              id="includeRemote"
              checked={includeRemoteAdd}
              onCheckedChange={(checked) => setPreferences({ includeRemoteAdd: checked })}
            />
            <span className="text-sm text-muted-foreground">Add flathub remote in generated scripts</span>
          </div>
        </div>
      </div>
      <Button type="submit" variant="default">
        Save
      </Button>
    </form>
  )
}
