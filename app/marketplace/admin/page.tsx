'use client'

import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const fetchSellers = async () => {
  const response = await axios.get('/api/sellers')
  return response.data
}

const fetchBuyers = async () => {
  const response = await axios.get('/api/buyers')
  return response.data
}

const updateUser = async (userData) => {
  const response = await axios.put(`/api/users/${userData.id}`, userData)
  return response.data
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('sellers')
  const queryClient = useQueryClient()

  const { data: sellers, isLoading: sellersLoading } = useQuery('sellers', fetchSellers)
  const { data: buyers, isLoading: buyersLoading } = useQuery('buyers', fetchBuyers)

  const updateUserMutation = useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('sellers')
      queryClient.invalidateQueries('buyers')
    },
  })

  const handleStatusChange = (user, newStatus) => {
    updateUserMutation.mutate({ ...user, status: newStatus })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="sellers">Sellers</TabsTrigger>
          <TabsTrigger value="buyers">Buyers</TabsTrigger>
          <TabsTrigger value="designs">Designs</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sellers">
          <ManageSellers 
            sellers={sellers} 
            isLoading={sellersLoading} 
            onStatusChange={handleStatusChange} 
          />
        </TabsContent>
        
        <TabsContent value="buyers">
          <ManageBuyers 
            buyers={buyers} 
            isLoading={buyersLoading} 
            onStatusChange={handleStatusChange} 
          />
        </TabsContent>

        <TabsContent value="designs">
          <ManageDesigns />
        </TabsContent>

        <TabsContent value="transactions">
          <ManageTransactions />
        </TabsContent>
      </Tabs>
    </div>
  )
}
