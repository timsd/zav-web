'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BuyerDashboard() {
  const [activeProjects, setActiveProjects] = useState([
    { id: 1, name: "Modern Minimalist Home", seller: "ArchitectJohn", status: "In Progress", completion: 60 },
    { id: 2, name: "Eco-Friendly Treehouse", seller: "GreenDesigns", status: "Awaiting Approval", completion: 100 },
  ])

  const [completedProjects, setCompletedProjects] = useState([
    { id: 3, name: "Urban Loft Conversion", seller: "CitySpaceInnovators", completionDate: "2024-03-15" },
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Buyer Dashboard</h1>
      
      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active Projects</TabsTrigger>
          <TabsTrigger value="completed">Completed Projects</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active">
          <div className="grid gap-4">
            {activeProjects.map(project => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>Seller: {project.seller}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Status: {project.status}</p>
                  <div className="mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${project.completion}%` }}></div>
                  </div>
                  <Button className="mt-4">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="completed">
          <div className="grid gap-4">
            {completedProjects.map(project => (
              <Card key={project.id}>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>Seller: {project.seller}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Completed on: {project.completionDate}</p>
                  <Button className="mt-4">Download Files</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="messages">
          {/* Implement chat component here */}
          <p>Chat functionality to be implemented</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
