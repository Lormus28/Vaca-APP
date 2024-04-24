import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import ExpensesPage from './pages/expensesPage';
import FriendsPage from './pages/friendsPage'; 
import GroupsPage from './pages/groupsPage'; 

const AppRoutes = () => {
  return (
    <Routes>

        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="expenses" element={<ExpensesPage />} />
        <Route path="friends" element={<FriendsPage />} />
        <Route path="groups" element={<GroupsPage />} />
    </Routes>
  );
};

export default AppRoutes;