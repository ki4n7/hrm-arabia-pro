
import React, { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Bell, Calendar, FileText, Clock, Check, ArrowDownToLine, Filter } from "lucide-react";

// Sample notifications data
const notificationsData = [
  {
    id: 1,
    type: "vacation",
    title: "طلب إجازة جديد",
    content: "قام محمد أحمد بتقديم طلب إجازة لمدة 5 أيام",
    date: "منذ 30 دقيقة",
    read: false,
  },
  {
    id: 2,
    type: "advance",
    title: "طلب سلفة جديد",
    content: "قام خالد محمود بتقديم طلب سلفة بقيمة 5000 ريال",
    date: "منذ ساعتين",
    read: false,
  },
  {
    id: 3,
    type: "departure",
    title: "تسجيل مغادرة",
    content: "قامت سارة علي بتسجيل مغادرة مبكرة الساعة 2:30 مساءً",
    date: "اليوم 10:45 صباحًا",
    read: true,
  },
  {
    id: 4,
    type: "system",
    title: "تحديث النظام",
    content: "تم تحديث النظام إلى الإصدار الجديد v2.3.4",
    date: "أمس",
    read: true,
  },
  {
    id: 5,
    type: "vacation",
    title: "الموافقة على طلب إجازة",
    content: "تمت الموافقة على طلب الإجازة الخاص بك من قبل المدير",
    date: "أمس",
    read: true,
  },
  {
    id: 6,
    type: "system",
    title: "نسخة احتياطية جديدة",
    content: "تم إنشاء نسخة احتياطية جديدة للنظام بنجاح",
    date: "قبل 3 أيام",
    read: true,
  },
  {
    id: 7,
    type: "advance",
    title: "تم رفض طلب السلفة",
    content: "تم رفض طلب السلفة المقدم منك، يرجى مراجعة المدير المالي",
    date: "قبل 4 أيام",
    read: true,
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  
  const markAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({
        ...notification,
        read: true,
      }))
    );
  };
  
  const markAsRead = (id: number) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };
  
  const getIconByType = (type: string) => {
    switch (type) {
      case "vacation":
        return <Calendar className="h-5 w-5 text-green-500" />;
      case "advance":
        return <FileText className="h-5 w-5 text-purple-500" />;
      case "departure":
        return <Clock className="h-5 w-5 text-orange-500" />;
      case "system":
        return <Bell className="h-5 w-5 text-blue-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };
  
  const unreadCount = notifications.filter(notification => !notification.read).length;

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <CardTitle>الإشعارات</CardTitle>
              <CardDescription>
                {unreadCount > 0 
                  ? `لديك ${unreadCount} إشعارات غير مقروءة`
                  : "جميع الإشعارات مقروءة"
                }
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
              <Button variant="outline" size="sm" className="gap-1" onClick={markAllAsRead}>
                <Check className="h-4 w-4 ml-1" />
                تعليم الكل كمقروءة
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Filter className="h-4 w-4 ml-1" />
                تصفية
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <ArrowDownToLine className="h-4 w-4 ml-1" />
                تصدير
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="all">
                  الكل{" "}
                  <span className="inline-flex items-center justify-center mr-1 w-5 h-5 text-xs bg-gray-200 rounded-full">
                    {notifications.length}
                  </span>
                </TabsTrigger>
                <TabsTrigger value="unread">
                  غير مقروءة{" "}
                  <span className="inline-flex items-center justify-center mr-1 w-5 h-5 text-xs bg-gray-200 rounded-full">
                    {unreadCount}
                  </span>
                </TabsTrigger>
                <TabsTrigger value="requests">الطلبات</TabsTrigger>
                <TabsTrigger value="system">النظام</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="space-y-2">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 border rounded-md flex ${
                        !notification.read ? "bg-gray-50 border-gray-300" : ""
                      }`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex-shrink-0 mr-4 ml-3">
                        {getIconByType(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className={`font-medium ${!notification.read ? "text-blue-600" : ""}`}>
                            {notification.title}
                          </h4>
                          <span className="text-xs text-gray-500">{notification.date}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{notification.content}</p>
                      </div>
                      {!notification.read && (
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="unread">
                <div className="space-y-2">
                  {notifications.filter(n => !n.read).map((notification) => (
                    <div
                      key={notification.id}
                      className="p-4 border rounded-md flex bg-gray-50 border-gray-300"
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex-shrink-0 mr-4 ml-3">
                        {getIconByType(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-blue-600">
                            {notification.title}
                          </h4>
                          <span className="text-xs text-gray-500">{notification.date}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{notification.content}</p>
                      </div>
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    </div>
                  ))}
                  {unreadCount === 0 && (
                    <div className="text-center py-12">
                      <Bell className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                      <h3 className="text-lg font-medium text-gray-500">لا توجد إشعارات غير مقروءة</h3>
                      <p className="text-sm text-gray-400 mt-1">جميع الإشعارات تم قراءتها</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="requests">
                <div className="space-y-2">
                  {notifications
                    .filter(n => ["vacation", "advance", "departure"].includes(n.type))
                    .map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border rounded-md flex ${
                          !notification.read ? "bg-gray-50 border-gray-300" : ""
                        }`}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <div className="flex-shrink-0 mr-4 ml-3">
                          {getIconByType(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className={`font-medium ${!notification.read ? "text-blue-600" : ""}`}>
                              {notification.title}
                            </h4>
                            <span className="text-xs text-gray-500">{notification.date}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{notification.content}</p>
                        </div>
                        {!notification.read && (
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        )}
                      </div>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="system">
                <div className="space-y-2">
                  {notifications
                    .filter(n => n.type === "system")
                    .map((notification) => (
                      <div
                        key={notification.id}
                        className={`p-4 border rounded-md flex ${
                          !notification.read ? "bg-gray-50 border-gray-300" : ""
                        }`}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <div className="flex-shrink-0 mr-4 ml-3">
                          {getIconByType(notification.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h4 className={`font-medium ${!notification.read ? "text-blue-600" : ""}`}>
                              {notification.title}
                            </h4>
                            <span className="text-xs text-gray-500">{notification.date}</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{notification.content}</p>
                        </div>
                        {!notification.read && (
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        )}
                      </div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;
