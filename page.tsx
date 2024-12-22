'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true)
  const [quality, setQuality] = useState('high')
  const [notifications, setNotifications] = useState(true)

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Settings</h1>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Dark Mode</h2>
            <p className="text-sm text-gray-400">Toggle dark mode on or off</p>
          </div>
          <Switch
            checked={darkMode}
            onCheckedChange={setDarkMode}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Audio Quality</h2>
          <p className="text-sm text-gray-400 mb-2">Select your preferred audio quality</p>
          <Select value={quality} onValueChange={setQuality}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select quality" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="ultra">Ultra</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Notifications</h2>
            <p className="text-sm text-gray-400">Enable or disable notifications</p>
          </div>
          <Switch
            checked={notifications}
            onCheckedChange={setNotifications}
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Privacy</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Switch id="private-session" />
              <Label htmlFor="private-session">Enable private session</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="data-saver" />
              <Label htmlFor="data-saver">Enable data saver</Label>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Account</h2>
          <div className="space-y-4">
            <Button variant="outline">Change Password</Button>
            <Button variant="outline">Delete Account</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

