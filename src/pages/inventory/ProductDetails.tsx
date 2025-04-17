
import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Edit, Trash, RefreshCw, BarChart4, Package, ListFilter, History, Truck } from "lucide-react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  
  // Mock product data
  const product = {
    id: id,
    name: `منتج ${id}`,
    sku: `SKU-${id}`,
    barcode: `BC${id}${Math.floor(Math.random() * 1000000)}`,
    price: Math.floor(Math.random() * 1000) + 100,
    cost: Math.floor(Math.random() * 800) + 50,
    quantity: Math.floor(Math.random() * 100) + 10,
    category: "إلكترونيات",
    warehouse: "المستودع الرئيسي",
    status: "متوفر",
    lastUpdated: "15/04/2025",
    createdAt: "10/01/2025",
    description: "وصف تفصيلي للمنتج يتضمن مواصفاته وخصائصه واستخداماته",
    supplier: "شركة التوريدات العالمية",
    minQuantity: 5,
    maxQuantity: 200,
    dimensions: "30 × 20 × 10 سم",
    weight: "1.5 كجم",
    location: "الرف A-12",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    transactions: [
      { id: "TRX-101", type: "استلام", quantity: 50, date: "10/03/2025", by: "أحمد محمد" },
      { id: "TRX-102", type: "صرف", quantity: 15, date: "20/03/2025", by: "خالد عبدالله" },
      { id: "TRX-103", type: "جرد", quantity: 35, date: "05/04/2025", by: "فيصل سعود" },
    ]
  };

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
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>رمز المنتج: {product.sku}</span>
                <span>•</span>
                <span>الباركود: {product.barcode}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 ml-2" />
              تحديث
            </Button>
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 ml-2" />
              تعديل
            </Button>
            <Button variant="destructive" size="sm">
              <Trash className="h-4 w-4 ml-2" />
              حذف
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>معلومات المنتج</CardTitle>
              <CardDescription>
                التفاصيل الأساسية للمنتج
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">السعر</div>
                  <div className="font-semibold">{product.price} ريال</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">التكلفة</div>
                  <div className="font-semibold">{product.cost} ريال</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">الكمية الحالية</div>
                  <div className="font-semibold">{product.quantity} وحدة</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">الصنف</div>
                  <div className="font-semibold">{product.category}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">المستودع</div>
                  <div className="font-semibold">{product.warehouse}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">الحالة</div>
                  <div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                      {product.status}
                    </Badge>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">المورد</div>
                  <div className="font-semibold">{product.supplier}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">آخر تحديث</div>
                  <div className="font-semibold">{product.lastUpdated}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-sm font-medium text-muted-foreground">الوصف</div>
                  <div className="text-sm mt-1">{product.description}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>صور المنتج</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {product.images.map((img, index) => (
                  <div key={index} className="border rounded-md overflow-hidden">
                    <img 
                      src={img} 
                      alt={`صورة المنتج ${index + 1}`} 
                      className="w-full h-24 object-cover"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="inventory" className="w-full">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="inventory">
              <Package className="h-4 w-4 ml-2" />
              المخزون
            </TabsTrigger>
            <TabsTrigger value="transactions">
              <History className="h-4 w-4 ml-2" />
              الحركات
            </TabsTrigger>
            <TabsTrigger value="logistics">
              <Truck className="h-4 w-4 ml-2" />
              التوريد والشحن
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <BarChart4 className="h-4 w-4 ml-2" />
              التحليلات
            </TabsTrigger>
          </TabsList>

          <TabsContent value="inventory" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>تفاصيل المخزون</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="text-sm font-medium text-muted-foreground">الكمية المتوفرة</div>
                    <div className="text-2xl font-bold">{product.quantity}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {product.quantity > product.minQuantity ? 'المخزون كافي' : 'يجب إعادة الطلب'}
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-sm font-medium text-muted-foreground">الحد الأدنى</div>
                    <div className="text-2xl font-bold">{product.minQuantity}</div>
                    <div className="text-xs text-muted-foreground mt-1">الحد الأدنى للتنبيه</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-sm font-medium text-muted-foreground">الحد الأقصى</div>
                    <div className="text-2xl font-bold">{product.maxQuantity}</div>
                    <div className="text-xs text-muted-foreground mt-1">سعة التخزين القصوى</div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <h3 className="text-sm font-medium">معلومات إضافية</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-2">
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-sm text-muted-foreground">الأبعاد</span>
                      <span className="text-sm font-medium">{product.dimensions}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-sm text-muted-foreground">الوزن</span>
                      <span className="text-sm font-medium">{product.weight}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-sm text-muted-foreground">موقع التخزين</span>
                      <span className="text-sm font-medium">{product.location}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-sm text-muted-foreground">تاريخ الإضافة</span>
                      <span className="text-sm font-medium">{product.createdAt}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>حركات المخزون</CardTitle>
                <CardDescription>سجل حركات المنتج من استلام وصرف وجرد</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {product.transactions.map((transaction, index) => (
                    <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">{transaction.id}</div>
                        <div className="text-sm text-muted-foreground">بواسطة: {transaction.by}</div>
                      </div>
                      <div className="text-center">
                        <div>
                          <Badge variant="outline" className={
                            transaction.type === 'استلام' ? 'bg-green-50 text-green-700' : 
                            transaction.type === 'صرف' ? 'bg-red-50 text-red-700' : 
                            'bg-blue-50 text-blue-700'
                          }>
                            {transaction.type}
                          </Badge>
                        </div>
                        <div className="text-sm font-medium mt-1">{transaction.quantity} وحدة</div>
                      </div>
                      <div className="text-left">
                        <div className="text-sm">{transaction.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="logistics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>معلومات التوريد والشحن</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-2">معلومات المورد</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                      <div className="flex justify-between py-1 border-b">
                        <span className="text-sm text-muted-foreground">اسم المورد</span>
                        <span className="text-sm font-medium">{product.supplier}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span className="text-sm text-muted-foreground">وقت التوريد</span>
                        <span className="text-sm font-medium">7-10 أيام</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span className="text-sm text-muted-foreground">الحد الأدنى للطلب</span>
                        <span className="text-sm font-medium">20 وحدة</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span className="text-sm text-muted-foreground">آخر عملية توريد</span>
                        <span className="text-sm font-medium">10/03/2025</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-2">معلومات الشحن</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                      <div className="flex justify-between py-1 border-b">
                        <span className="text-sm text-muted-foreground">طريقة الشحن</span>
                        <span className="text-sm font-medium">شحن بري</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span className="text-sm text-muted-foreground">متوسط وقت الشحن</span>
                        <span className="text-sm font-medium">3-5 أيام</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span className="text-sm text-muted-foreground">تكلفة الشحن للوحدة</span>
                        <span className="text-sm font-medium">5 ريال</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span className="text-sm text-muted-foreground">ملاحظات</span>
                        <span className="text-sm font-medium">يتطلب تغليف خاص</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>تحليلات المنتج</CardTitle>
                <CardDescription>إحصائيات وتحليلات أداء المنتج</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 border rounded-lg text-center">
                    <div className="text-sm font-medium text-muted-foreground">معدل الدوران</div>
                    <div className="text-2xl font-bold">4.2</div>
                    <div className="text-xs text-green-600 mt-1">+12% عن الشهر السابق</div>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <div className="text-sm font-medium text-muted-foreground">هامش الربح</div>
                    <div className="text-2xl font-bold">25.5%</div>
                    <div className="text-xs text-muted-foreground mt-1">متوسط</div>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <div className="text-sm font-medium text-muted-foreground">الطلب الشهري</div>
                    <div className="text-2xl font-bold">42 وحدة</div>
                    <div className="text-xs text-red-600 mt-1">-5% عن الشهر السابق</div>
                  </div>
                </div>

                <div className="h-64 w-full bg-gray-50 rounded-lg flex items-center justify-center border">
                  <div className="text-center text-muted-foreground">
                    <BarChart4 className="h-12 w-12 mx-auto text-muted-foreground/50" />
                    <p className="mt-2">بيانات المبيعات والمخزون</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-2">توصيات</h3>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-sm">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">
                        مخزون
                      </Badge>
                      <span>يوصى بزيادة الحد الأدنى للطلب نظراً لزيادة معدل الطلب</span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        مبيعات
                      </Badge>
                      <span>المنتج يحقق أداءً جيداً ضمن فئته</span>
                    </li>
                    <li className="flex gap-2 text-sm">
                      <Badge variant="outline" className="bg-yellow-50 text-yellow-700">
                        تسعير
                      </Badge>
                      <span>يمكن زيادة السعر بنسبة 5% لتحسين الربحية دون التأثير على المبيعات</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ProductDetails;
