import Alpine from 'alpinejs';
import Chart from 'chart.js/auto';
import 'boxicons/css/boxicons.css';

window.Alpine = Alpine;
Alpine.start();
window.Chart = Chart;

// Initialize Charts
document.addEventListener('DOMContentLoaded', () => {
    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        new Chart(revenueCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Revenue',
                    data: [12000, 19000, 15000, 25000, 22000, 30000],
                    backgroundColor: 'rgba(59, 130, 246, 0.5)',
                    borderColor: 'rgb(59, 130, 246)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Users Chart
    const usersCtx = document.getElementById('usersChart');
    if (usersCtx) {
        new Chart(usersCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Active Users',
                    data: [65, 59, 80, 81, 56, 55],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }
});

// Notification handling
document.addEventListener('DOMContentLoaded', () => {
    // Mark notification as read
    const markAsReadButtons = document.querySelectorAll('[data-mark-as-read]');
    markAsReadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const notification = e.target.closest('.notification');
            notification.classList.remove('bg-blue-50');
            notification.classList.add('bg-white');
            const checkIcon = button.querySelector('i');
            checkIcon.classList.remove('text-blue-600');
            checkIcon.classList.add('text-gray-400');
        });
    });

    // Mark all notifications as read
    const markAllAsReadButton = document.querySelector('[data-mark-all-read]');
    if (markAllAsReadButton) {
        markAllAsReadButton.addEventListener('click', () => {
            const notifications = document.querySelectorAll('.notification');
            notifications.forEach(notification => {
                notification.classList.remove('bg-blue-50');
                notification.classList.add('bg-white');
                const checkIcon = notification.querySelector('[data-mark-as-read] i');
                checkIcon.classList.remove('text-blue-600');
                checkIcon.classList.add('text-gray-400');
            });
        });
    }

    // Clear all notifications
    const clearAllButton = document.querySelector('[data-clear-all]');
    if (clearAllButton) {
        clearAllButton.addEventListener('click', () => {
            const notificationsList = document.querySelector('.notifications-list');
            if (notificationsList) {
                notificationsList.innerHTML = '<div class="p-4 text-center text-gray-500">No notifications</div>';
            }
        });
    }
});

// Sidebar toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.querySelector('[data-sidebar-toggle]');
    const sidebar = document.querySelector('[data-sidebar]');
    const mainContent = document.querySelector('[data-main-content]');

    if (sidebarToggle && sidebar && mainContent) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('w-64');
            sidebar.classList.toggle('w-20');
            mainContent.classList.toggle('ml-64');
            mainContent.classList.toggle('ml-20');
        });
    }
});

// Profile dropdown functionality
document.addEventListener('DOMContentLoaded', () => {
    const profileButton = document.querySelector('[data-profile-button]');
    const profileDropdown = document.querySelector('[data-profile-dropdown]');

    if (profileButton && profileDropdown) {
        profileButton.addEventListener('click', () => {
            profileDropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!profileButton.contains(e.target) && !profileDropdown.contains(e.target)) {
                profileDropdown.classList.add('hidden');
            }
        });
    }
});
