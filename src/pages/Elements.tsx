
import React from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";

// Component Imports
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter } from "@/components/ui/drawer";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

// Icons
import { 
  AlertCircle, BellRing, Check, ChevronsUpDown, Info, 
  Loader2, LucideIcon, MoreHorizontal, CalendarIcon,
  Plus, Search, Settings, User, Menu, X
} from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "اسم المستخدم يجب أن يكون أكثر من حرفين",
  }),
});

const Elements = () => {
  const [progress, setProgress] = React.useState(40);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Form submission logic would go here
    console.log(values);
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">العناصر</h1>
          <Button asChild>
            <Link to="/">العودة للوحة التحكم</Link>
          </Button>
        </div>

        <Tabs defaultValue="buttons" className="w-full">
          <TabsList className="mb-4 flex flex-wrap h-auto p-1">
            <TabsTrigger value="buttons">الأزرار</TabsTrigger>
            <TabsTrigger value="inputs">حقول الإدخال</TabsTrigger>
            <TabsTrigger value="cards">البطاقات</TabsTrigger>
            <TabsTrigger value="dialogs">نوافذ الحوار</TabsTrigger>
            <TabsTrigger value="tables">الجداول</TabsTrigger>
            <TabsTrigger value="navigations">عناصر التنقل</TabsTrigger>
            <TabsTrigger value="feedback">عناصر التنبيه</TabsTrigger>
            <TabsTrigger value="forms">النماذج</TabsTrigger>
            <TabsTrigger value="data-display">عرض البيانات</TabsTrigger>
            <TabsTrigger value="layout">تخطيط الصفحة</TabsTrigger>
          </TabsList>

          {/* Buttons Section */}
          <TabsContent value="buttons" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>الأزرار</CardTitle>
                <CardDescription>أنواع مختلفة من الأزرار المستخدمة في النظام</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">أنواع الأزرار</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button>زر افتراضي</Button>
                    <Button variant="secondary">زر ثانوي</Button>
                    <Button variant="destructive">زر حذف</Button>
                    <Button variant="outline">زر إطار</Button>
                    <Button variant="ghost">زر شبح</Button>
                    <Button variant="link">زر رابط</Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">أحجام الأزرار</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="lg">زر كبير</Button>
                    <Button>زر متوسط</Button>
                    <Button size="sm">زر صغير</Button>
                    <Button size="icon"><Plus className="h-4 w-4" /></Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">حالات الأزرار</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button disabled>زر معطل</Button>
                    <Button>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      جاري التحميل
                    </Button>
                    <Button>
                      <Check className="mr-2 h-4 w-4" />
                      تم الحفظ
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Inputs Section */}
          <TabsContent value="inputs" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>حقول الإدخال</CardTitle>
                <CardDescription>أنواع مختلفة من حقول الإدخال المستخدمة في النظام</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">حقول النص</h3>
                  <div className="grid gap-4 max-w-md">
                    <div className="space-y-2">
                      <Label htmlFor="name">الاسم</Label>
                      <Input id="name" placeholder="أدخل الاسم الكامل" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">البريد الإلكتروني</Label>
                      <Input id="email" type="email" placeholder="example@domain.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password">كلمة المرور</Label>
                      <Input id="password" type="password" placeholder="••••••••" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="disabled">حقل معطل</Label>
                      <Input id="disabled" disabled placeholder="هذا الحقل معطل" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">حقول اختيارية</h3>
                  <div className="grid gap-6 max-w-md">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="mr-2">أوافق على الشروط والأحكام</Label>
                    </div>
                    
                    <div className="space-y-3">
                      <Label>اختر تفضيلاتك</Label>
                      <RadioGroup defaultValue="option-one">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option-one" id="option-one" />
                          <Label htmlFor="option-one" className="mr-2">الخيار الأول</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="option-two" id="option-two" />
                          <Label htmlFor="option-two" className="mr-2">الخيار الثاني</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">القوائم المنسدلة</h3>
                  <div className="max-w-md">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">الخيار الأول</SelectItem>
                        <SelectItem value="option2">الخيار الثاني</SelectItem>
                        <SelectItem value="option3">الخيار الثالث</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">اختيار التاريخ</h3>
                  <div className="max-w-md">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-right">
                          {date ? date.toLocaleDateString() : "اختر تاريخ"}
                          <CalendarIcon className="mr-2 h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md border p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">حقل رمز التحقق</h3>
                  <div className="max-w-md">
                    <InputOTP maxLength={6}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cards Section */}
          <TabsContent value="cards" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>البطاقات</CardTitle>
                <CardDescription>أنواع مختلفة من البطاقات المستخدمة لعرض المعلومات</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>بطاقة معلومات</CardTitle>
                      <CardDescription>وصف للبطاقة وما تحتويه من معلومات</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>هذه البطاقة تستخدم لعرض معلومات بشكل منظم وجذاب.</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">إلغاء</Button>
                      <Button>حفظ</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="bg-muted rounded-t-lg">
                      <CardTitle>بطاقة بخلفية</CardTitle>
                      <CardDescription>نمط آخر من البطاقات</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">الحالة:</span>
                          <Badge>مكتمل</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">الأولوية:</span>
                          <Badge variant="destructive">عالية</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">التاريخ:</span>
                          <span>22/10/2023</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">عرض التفاصيل</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Dialogs Section */}
          <TabsContent value="dialogs" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>نوافذ الحوار</CardTitle>
                <CardDescription>أنواع مختلفة من نوافذ الحوار والتنبيهات</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">نافذة حوار بسيطة</h3>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>فتح نافذة الحوار</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>عنوان نافذة الحوار</DialogTitle>
                          <DialogDescription>
                            هذا وصف لنافذة الحوار. يمكن استخدام هذه النافذة لعرض معلومات أو طلب تأكيد من المستخدم.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                          <p>محتوى نافذة الحوار يظهر هنا. يمكن إضافة أي عناصر مثل النصوص أو الصور أو النماذج.</p>
                        </div>
                        <DialogFooter>
                          <Button type="submit">تأكيد</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">نافذة تأكيد</h3>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive">حذف العنصر</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>هل أنت متأكد من الحذف؟</AlertDialogTitle>
                          <AlertDialogDescription>
                            هذا الإجراء لا يمكن التراجع عنه. سيتم حذف العنصر نهائياً من قاعدة البيانات.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>إلغاء</AlertDialogCancel>
                          <AlertDialogAction>تأكيد الحذف</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">لوحة جانبية</h3>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline">فتح اللوحة الجانبية</Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>اللوحة الجانبية</SheetTitle>
                          <SheetDescription>
                            يمكن استخدام هذه اللوحة لعرض معلومات إضافية أو تحرير بيانات.
                          </SheetDescription>
                        </SheetHeader>
                        <div className="py-4">
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="name-sheet">الاسم</Label>
                              <Input id="name-sheet" placeholder="أدخل الاسم" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="description-sheet">الوصف</Label>
                              <Input id="description-sheet" placeholder="أدخل الوصف" />
                            </div>
                            <Button className="w-full">حفظ التغييرات</Button>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">درج سفلي</h3>
                    <Drawer>
                      <DrawerTrigger asChild>
                        <Button variant="outline">فتح الدرج</Button>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle>الدرج السفلي</DrawerTitle>
                          <DrawerDescription>هذا مثال على الدرج السفلي الذي يظهر من أسفل الشاشة.</DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4 space-y-4">
                          <p>يمكن استخدام الدرج السفلي لعرض معلومات إضافية أو خيارات متقدمة.</p>
                          <div className="flex justify-end gap-2">
                            <Button variant="outline">إلغاء</Button>
                            <Button>تأكيد</Button>
                          </div>
                        </div>
                        <DrawerFooter>
                          <p className="text-sm text-muted-foreground">تذييل الدرج السفلي يظهر هنا.</p>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tables Section */}
          <TabsContent value="tables" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>الجداول</CardTitle>
                <CardDescription>أنماط مختلفة من الجداول لعرض البيانات</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">جدول بسيط</h3>
                  <div className="border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>الاسم</TableHead>
                          <TableHead>البريد الإلكتروني</TableHead>
                          <TableHead>الحالة</TableHead>
                          <TableHead>الإجراءات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>أحمد محمد</TableCell>
                          <TableCell>ahmed@example.com</TableCell>
                          <TableCell><Badge variant="outline">نشط</Badge></TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>عرض</DropdownMenuItem>
                                <DropdownMenuItem>تعديل</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">حذف</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>سارة خالد</TableCell>
                          <TableCell>sarah@example.com</TableCell>
                          <TableCell><Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">مكتمل</Badge></TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>عرض</DropdownMenuItem>
                                <DropdownMenuItem>تعديل</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">حذف</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>محمد علي</TableCell>
                          <TableCell>mohamed@example.com</TableCell>
                          <TableCell><Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">قيد الانتظار</Badge></TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>عرض</DropdownMenuItem>
                                <DropdownMenuItem>تعديل</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">حذف</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Navigations Section */}
          <TabsContent value="navigations" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>عناصر التنقل</CardTitle>
                <CardDescription>أنماط مختلفة من عناصر التنقل داخل التطبيق</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">القوائم المنسدلة</h3>
                  <div className="flex flex-wrap gap-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline">القائمة <ChevronsUpDown className="ml-2 h-4 w-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>حسابي</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>الملف الشخصي</DropdownMenuItem>
                        <DropdownMenuItem>الإعدادات</DropdownMenuItem>
                        <DropdownMenuItem>المساعدة</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>تسجيل الخروج</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">التبويبات</h3>
                  <Tabs defaultValue="account" className="w-full max-w-md">
                    <TabsList className="grid grid-cols-3">
                      <TabsTrigger value="account">الحساب</TabsTrigger>
                      <TabsTrigger value="password">كلمة المرور</TabsTrigger>
                      <TabsTrigger value="settings">الإعدادات</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className="p-4 border rounded-b-lg mt-2">
                      <p>محتوى تبويب الحساب يظهر هنا.</p>
                    </TabsContent>
                    <TabsContent value="password" className="p-4 border rounded-b-lg mt-2">
                      <p>محتوى تبويب كلمة المرور يظهر هنا.</p>
                    </TabsContent>
                    <TabsContent value="settings" className="p-4 border rounded-b-lg mt-2">
                      <p>محتوى تبويب الإعدادات يظهر هنا.</p>
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">الأكورديون</h3>
                  <Accordion type="single" collapsible className="w-full max-w-md">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>الأسئلة الشائعة</AccordionTrigger>
                      <AccordionContent>
                        هنا تظهر إجابات الأسئلة الشائعة ومعلومات إضافية عند النقر على العنوان.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>كيفية استخدام النظام</AccordionTrigger>
                      <AccordionContent>
                        شرح مفصل عن كيفية استخدام النظام والميزات المتاحة للمستخدمين.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>معلومات الاتصال</AccordionTrigger>
                      <AccordionContent>
                        هنا تظهر معلومات الاتصال بفريق الدعم الفني وساعات العمل.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Feedback Section */}
          <TabsContent value="feedback" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>عناصر التنبيه والملاحظات</CardTitle>
                <CardDescription>عناصر لإظهار التنبيهات والملاحظات للمستخدم</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">التنبيهات</h3>
                  <div className="space-y-4">
                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertTitle>ملاحظة</AlertTitle>
                      <AlertDescription>
                        هذا تنبيه معلوماتي لإعلام المستخدم بمعلومات مهمة.
                      </AlertDescription>
                    </Alert>
                    
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>خطأ</AlertTitle>
                      <AlertDescription>
                        حدث خطأ أثناء معالجة طلبك. الرجاء المحاولة مرة أخرى.
                      </AlertDescription>
                    </Alert>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">شارات</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>افتراضي</Badge>
                    <Badge variant="secondary">ثانوي</Badge>
                    <Badge variant="destructive">حرج</Badge>
                    <Badge variant="outline">إطار</Badge>
                    <Badge className="bg-amber-500">مخصص</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">شريط التقدم</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>تقدم المهمة</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} />
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setProgress(p => Math.max(0, p - 10))}
                      >
                        تقليل
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => setProgress(p => Math.min(100, p + 10))}
                      >
                        زيادة
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Forms Section */}
          <TabsContent value="forms" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>النماذج</CardTitle>
                <CardDescription>أمثلة على نماذج الإدخال المختلفة</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">نموذج بسيط</h3>
                  <div className="space-y-4 max-w-md">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormItem>
                          <FormLabel>اسم المستخدم</FormLabel>
                          <FormControl>
                            <Input placeholder="أدخل اسم المستخدم" {...form.register("username")} />
                          </FormControl>
                          <FormDescription>
                            هذا هو اسم المستخدم الخاص بك.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                        <Button type="submit">إرسال</Button>
                      </form>
                    </Form>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">نموذج تسجيل الدخول</h3>
                  <div className="border rounded-lg p-6 max-w-md">
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <Label htmlFor="email">البريد الإلكتروني</Label>
                        <Input id="email" type="email" placeholder="example@domain.com" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="password">كلمة المرور</Label>
                        <Input id="password" type="password" placeholder="••••••••" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember" className="mr-2">تذكرني</Label>
                      </div>
                      <Button className="w-full">تسجيل الدخول</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Data Display Section */}
          <TabsContent value="data-display" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>عرض البيانات</CardTitle>
                <CardDescription>عناصر مختلفة لعرض البيانات</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">الصور الرمزية</h3>
                  <div className="flex flex-wrap gap-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src="https://github.com/ahmed.png" alt="@ahmed" />
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Layout Section */}
          <TabsContent value="layout" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>تخطيط الصفحة</CardTitle>
                <CardDescription>عناصر تخطيط الصفحة المختلفة</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">شبكة عرض</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted rounded-lg p-4 text-center">العمود 1</div>
                    <div className="bg-muted rounded-lg p-4 text-center">العمود 2</div>
                    <div className="bg-muted rounded-lg p-4 text-center">العمود 3</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Elements;
