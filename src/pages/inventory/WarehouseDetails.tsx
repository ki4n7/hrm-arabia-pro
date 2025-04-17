
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Edit, Truck, Package, BarChart4, Users, History, Map, AlertCircle } from "lucide-react";
import DashboardLayout from "@/layouts/DashboardLayout";

const WarehouseDetails = () => {
  const { id } = useParams();
  
  // Mock warehouse data
  const warehouse = {
    id: id,
    name: id === "1" ? "المستودع الرئيسي" : `مستودع الفرع ${id}`,
    location: id === "1" ? "الرياض" : ["جدة", "الدمام", "المدينة المنورة"][Number(id) % 3],
    address: "شارع الملك فهد، حي العليا",
    manager: "عبدالله محمد",
    contactNumber: "050123456" + id,
    capacity: Math.floor(Math.random() * 10000) + 5000,
    usedCapacity: Math.floor(Math.random() * 7000) + 2000,
    products: Math.floor(Math.random() * 1000) + 500,
    categories: Math.floor(Math.random() * 20) + 5,
    staff: Math.floor(Math.random() * 10) + 5,
    createdAt: "10/01/2025",
    status: "نشط",
    mainProducts: [
      { name: "هاتف ذكي", quantity: 120, value: 120000 },
      { name: "حاسوب محمول", quantity: 80, value: 160000 },
      { name: "سماعات لاسلكية", quantity: 200, value: 40000 },
      { name: "شاشة عرض", quantity: 50, value: 60000 },
      { name: "طابعة", quantity: 30, value: 15000 },
    ],
    recentTransactions: [
      { id: "TRX-501", type: "استلام", items: 50, date: "15/04/2025", user: "خالد إبراهيم" },
      { id: "TRX-502", type: "صرف", items: 25, date: "14/04/2025", user: "سارة أحمد" },
      { id: "TRX-503", type: "تحويل", items: 35, date: "12/04/2025", user: "محمد علي" },
      { id: "TRX-504", type: "جرد", items: 0, date: "10/04/2025", user: "فيصل سعود" },
    ],
  };

  // Calculate usage percentage
  const usagePercentage = Math.round((warehouse.usedCapacity / warehouse.capacity) * 100);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/inventory/inventory">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">{warehouse.name}</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{warehouse.location}</span>
                <span>•</span>
                <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                  {warehouse.status}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 ml-2" />
              تعديل
            </Button>
            <Button variant="default" size="sm">
              <Package className="h-4 w-4 ml-2" />
              إضافة منتجات
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">إجمالي المنتجات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{warehouse.products}</div>
              <div className="text-xs text-muted-foreground">{warehouse.categories} صنف</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">السعة التخزينية</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-2">
                <div className="text-2xl font-bold">{usagePercentage}%</div>
                <div className="text-xs text-muted-foreground">{warehouse.usedCapacity} / {warehouse.capacity} م²</div>
              </div>
              <Progress value={usagePercentage} className="h-2" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">الموظفين</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{warehouse.staff}</div>
              <div className="text-xs text-muted-foreground">المدير: {warehouse.manager}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">القيمة الإجمالية</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {warehouse.mainProducts.reduce((sum, product) => sum + product.value, 0).toLocaleString()} ريال
              </div>
              <div className="text-xs text-muted-foreground">بناءً على أسعار التكلفة</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="products" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="products">
              <Package className="h-4 w-4 ml-2" />
              المنتجات
            </TabsTrigger>
            <TabsTrigger value="transactions">
              <History className="h-4 w-4 ml-2" />
              الحركات
            </TabsTrigger>
            <TabsTrigger value="staff">
              <Users className="h-4 w-4 ml-2" />
              الموظفين
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <BarChart4 className="h-4 w-4 ml-2" />
              التحليلات
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>المنتجات الرئيسية</CardTitle>
                <CardDescription>أهم المنتجات في المستودع من حيث القيمة والكمية</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {warehouse.mainProducts.map((product, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-muted-foreground">الكمية: {product.quantity}</div>
                      </div>
                      <div>
                        <div className="font-medium text-left">{product.value.toLocaleString()} ريال</div>
                        <div className="text-xs text-muted-foreground text-left">
                          {Math.round((product.value / warehouse.mainProducts.reduce((sum, p) => sum + p.value, 0)) * 100)}% من القيمة
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    عرض كافة المنتجات ({warehouse.products})
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>منتجات بحاجة للانتباه</CardTitle>
                <CardDescription>منتجات قليلة أو منتهية الصلاحية أو قريبة من النفاذ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border rounded-lg bg-red-50">
                    <div className="shrink-0">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">هاتف ذكي</div>
                      <div className="text-sm text-muted-foreground">متبقي 5 وحدات فقط (أقل من الحد الأدنى)</div>
                    </div>
                    <Button variant="outline" size="sm">طلب</Button>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 border rounded-lg bg-yellow-50">
                    <div className="shrink-0">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">سماعات لاسلكية</div>
                      <div className="text-sm text-muted-foreground">10 وحدات تنتهي صلاحيتها خلال أسبوع</div>
                    </div>
                    <Button variant="outline" size="sm">فحص</Button>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 border rounded-lg bg-blue-50">
                    <div className="shrink-0">
                      <AlertCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">شاشة عرض</div>
                      <div className="text-sm text-muted-foreground">مخزون راكد - لا يوجد حركة منذ 3 أشهر</div>
                    </div>
                    <Button variant="outline" size="sm">تخفيض</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>حركات المستودع الأخيرة</CardTitle>
                <CardDescription>آخر حركات الاستلام والصرف والتحويل</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {warehouse.recentTransactions.map((transaction, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">{transaction.id}</div>
                        <div className="text-sm text-muted-foreground">بواسطة: {transaction.user}</div>
                      </div>
                      <div className="text-center">
                        <div>
                          <Badge variant="outline" className={
                            transaction.type === 'استلام' ? 'bg-green-50 text-green-700' : 
                            transaction.type === 'صرف' ? 'bg-red-50 text-red-700' : 
                            transaction.type === 'تحويل' ? 'bg-blue-50 text-blue-700' :
                            'bg-purple-50 text-purple-700'
                          }>
                            {transaction.type}
                          </Badge>
                        </div>
                        {transaction.type !== 'جرد' && (
                          <div className="text-sm font-medium mt-1">{transaction.items} منتج</div>
                        )}
                      </div>
                      <div className="text-left">
                        <div className="text-sm">{transaction.date}</div>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    عرض كافة الحركات
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>عمليات الاستلام القادمة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between">
                        <div className="font-medium">شحنة هواتف ذكية</div>
                        <Badge variant="outline" className="bg-blue-50 text-blue-700">قادمة</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">التاريخ المتوقع: 20/04/2025</div>
                      <div className="text-sm text-muted-foreground">الكمية: 200 وحدة</div>
                    </div>
                    
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between">
                        <div className="font-medium">شحنة أجهزة لوحية</div>
                        <Badge variant="outline" className="bg-green-50 text-green-700">في الطريق</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">التاريخ المتوقع: 22/04/2025</div>
                      <div className="text-sm text-muted-foreground">الكمية: 50 وحدة</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>طلبات التحويل</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between">
                        <div className="font-medium">تحويل إلى فرع جدة</div>
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700">معلق</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">تاريخ الطلب: 16/04/2025</div>
                      <div className="text-sm text-muted-foreground">15 منتج مختلف</div>
                      <div className="mt-2">
                        <Button variant="outline" size="sm">موافقة</Button>
                      </div>
                    </div>
                    
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between">
                        <div className="font-medium">تحويل من فرع الدمام</div>
                        <Badge variant="outline" className="bg-purple-50 text-purple-700">قيد التنفيذ</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">تاريخ الوصول: 19/04/2025</div>
                      <div className="text-sm text-muted-foreground">8 منتجات مختلفة</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="staff" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>فريق العمل</CardTitle>
                <CardDescription>الموظفين العاملين في المستودع</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                      <span className="font-semibold text-muted-foreground">ع م</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{warehouse.manager}</div>
                      <div className="text-sm text-muted-foreground">مدير المستودع</div>
                    </div>
                    <div className="text-sm text-right">
                      <div>{warehouse.contactNumber}</div>
                      <div className="text-muted-foreground">منذ 2021</div>
                    </div>
                  </div>

                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                        <span className="font-semibold text-muted-foreground">
                          {['م س', 'أ ن', 'س ع', 'ف م'][index]}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">
                          {['محمد سعيد', 'أحمد ناصر', 'سامي عبدالله', 'فهد محمد'][index]}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {['مسؤول استلام', 'مسؤول صرف', 'مسؤول جرد', 'مسؤول تغليف'][index]}
                        </div>
                      </div>
                      <div className="text-sm text-right">
                        <div>05{Math.floor(Math.random() * 90000000) + 10000000}</div>
                        <div className="text-muted-foreground">
                          منذ {2021 + index}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>أداء المستودع</CardTitle>
                  <CardDescription>إحصاءات وتحليلات حركة المستودع</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-48 w-full bg-gray-50 rounded-lg flex items-center justify-center border mb-4">
                    <div className="text-center text-muted-foreground">
                      <BarChart4 className="h-12 w-12 mx-auto text-muted-foreground/50" />
                      <p className="mt-2">إحصائيات الحركة والمخزون</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="text-sm">معدل الدوران الشهري</div>
                      <div className="font-medium">3.2</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">متوسط وقت الاستلام</div>
                      <div className="font-medium">45 دقيقة</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">متوسط وقت الصرف</div>
                      <div className="font-medium">30 دقيقة</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">نسبة دقة المخزون</div>
                      <div className="font-medium">98.5%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>معلومات المستودع</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-50 rounded-lg flex items-center justify-center border mb-4">
                    <div className="text-center text-muted-foreground">
                      <Map className="h-12 w-12 mx-auto text-muted-foreground/50" />
                      <p className="mt-2">موقع المستودع</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-sm text-muted-foreground">العنوان</span>
                      <span className="text-sm font-medium">{warehouse.location}، {warehouse.address}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-sm text-muted-foreground">هاتف المستودع</span>
                      <span className="text-sm font-medium">{warehouse.contactNumber}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-sm text-muted-foreground">تاريخ الإنشاء</span>
                      <span className="text-sm font-medium">{warehouse.createdAt}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-sm text-muted-foreground">ساعات العمل</span>
                      <span className="text-sm font-medium">8:00 ص - 5:00 م</span>
                    </div>
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-sm text-muted-foreground">أيام العمل</span>
                      <span className="text-sm font-medium">الأحد - الخميس</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default WarehouseDetails;
