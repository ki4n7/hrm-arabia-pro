
import React, { useState } from "react";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  MessageCircle, 
  LifeBuoy, 
  HelpCircle, 
  FileQuestion, 
  AlertTriangle,
  Phone,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// بيانات وهمية للتذاكر
const ticketsData = [
  { 
    id: "TK-2301", 
    title: "مشكلة في تحميل البيانات", 
    status: "قيد المعالجة", 
    priority: "عالية",
    date: "2023-12-15", 
    department: "الدعم الفني" 
  },
  { 
    id: "TK-2302", 
    title: "استفسار حول العائد الاستثماري", 
    status: "مغلقة", 
    priority: "متوسطة",
    date: "2023-12-10", 
    department: "خدمة العملاء" 
  },
  { 
    id: "TK-2303", 
    title: "طلب تغيير معلومات المستثمر", 
    status: "مفتوحة", 
    priority: "منخفضة",
    date: "2023-12-18", 
    department: "خدمة العملاء" 
  },
  { 
    id: "TK-2304", 
    title: "مشكلة في عرض التقارير", 
    status: "مغلقة", 
    priority: "عالية",
    date: "2023-12-05", 
    department: "الدعم الفني" 
  },
  { 
    id: "TK-2305", 
    title: "شكوى بخصوص تأخر الرد", 
    status: "مفتوحة", 
    priority: "عالية",
    date: "2023-12-20", 
    department: "الشكاوى" 
  },
];

// بيانات وهمية للمحادثات
const conversationsData = [
  {
    id: 1,
    agent: "أحمد محمد",
    lastMessage: "سيتم الرد على استفساركم خلال ساعات العمل",
    date: "منذ ساعتين",
    unread: 2,
  },
  {
    id: 2,
    agent: "سارة خالد",
    lastMessage: "شكراً لتواصلكم معنا، هل هناك شيء آخر يمكنني مساعدتك به؟",
    date: "اليوم",
    unread: 0,
  },
  {
    id: 3,
    agent: "خدمة العملاء",
    lastMessage: "تم إرسال المعلومات المطلوبة إلى بريدك الإلكتروني",
    date: "أمس",
    unread: 0,
  },
];

// بيانات وهمية للأسئلة الشائعة
const faqData = [
  {
    question: "كيف يمكنني الاستثمار في مشروع جديد؟",
    answer: "يمكنك الاستثمار في المشاريع الجديدة من خلال زيارة صفحة المشاريع الاستثمارية واختيار المشروع المناسب ثم النقر على زر 'استثمر الآن'. سيتم توجيهك لاستكمال بيانات الاستثمار وطرق الدفع المتاحة."
  },
  {
    question: "ما هي مدة معالجة طلب السحب؟",
    answer: "تستغرق معالجة طلبات السحب من يوم إلى ثلاثة أيام عمل. بعد الموافقة على الطلب، قد تستغرق عملية التحويل البنكي من يوم إلى خمسة أيام عمل إضافية حسب البنك المستقبل."
  },
  {
    question: "كيف يتم احتساب الأرباح والعوائد الاستثمارية؟",
    answer: "يتم احتساب الأرباح والعوائد الاستثمارية بناءً على أداء المشروع وفترة الاستثمار ومبلغ الاستثمار. تختلف النسب حسب نوع المشروع وتصنيف المخاطر. يمكنك الاطلاع على التفاصيل الكاملة في صفحة تفاصيل المشروع."
  },
  {
    question: "ما هي إجراءات الأمان المتبعة لحماية بيانات المستثمرين؟",
    answer: "نستخدم تقنيات تشفير متقدمة لحماية بيانات المستثمرين والمعاملات المالية. كما نطبق نظام المصادقة الثنائية ونتبع أفضل ممارسات الأمان السيبراني لضمان خصوصية وأمان البيانات."
  },
  {
    question: "كيف يمكنني تحديث بياناتي الشخصية؟",
    answer: "يمكنك تحديث بياناتك الشخصية من خلال الانتقال إلى صفحة الملف الشخصي، ثم النقر على زر 'تعديل البيانات'. بعد تحديث المعلومات المطلوبة، انقر على 'حفظ التغييرات'."
  },
  {
    question: "هل يمكنني استرداد استثماري قبل نهاية مدة المشروع؟",
    answer: "نعم، يمكن استرداد الاستثمار قبل نهاية مدة المشروع في معظم الحالات، مع مراعاة أن هناك رسوم استرداد مبكر تختلف حسب المشروع وفترة الاستثمار المتبقية. يرجى مراجعة شروط الاسترداد المبكر في صفحة تفاصيل المشروع."
  },
];

// بيانات وهمية لمعلومات الاتصال
const contactInfo = {
  phone: "+966 12 345 6789",
  email: "support@investmentco.com",
  workingHours: "الأحد إلى الخميس: 8:30 صباحاً - 4:30 مساءً",
  address: "برج الاستثمار، شارع الملك فهد، الرياض، المملكة العربية السعودية"
};

const CustomerSupport: React.FC = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [department, setDepartment] = useState("support");
  const [supportMessage, setSupportMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // وظيفة لإرسال التذكرة الجديدة
  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال التذكرة بنجاح",
      description: "سيتم التواصل معك قريباً على البريد الإلكتروني المسجل",
    });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  // وظيفة لإرسال رسالة الدعم الفوري
  const handleSendSupportMessage = () => {
    if (supportMessage.trim()) {
      toast({
        title: "تم إرسال الرسالة",
        description: "سيتم الرد عليك في أقرب وقت ممكن",
      });
      setSupportMessage("");
    }
  };

  // تصفية التذاكر بناءً على كلمة البحث
  const filteredTickets = ticketsData.filter(ticket => 
    ticket.title.includes(searchTerm) || 
    ticket.id.includes(searchTerm) ||
    ticket.department.includes(searchTerm)
  );

  // وظيفة إظهار حالة التذكرة بلون مختلف
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "مفتوحة": return "success";
      case "قيد المعالجة": return "warning";
      case "مغلقة": return "secondary";
      default: return "default";
    }
  };

  // وظيفة إظهار أولوية التذكرة بلون مختلف
  const getPriorityBadgeVariant = (priority: string) => {
    switch (priority) {
      case "عالية": return "destructive";
      case "متوسطة": return "warning";
      case "منخفضة": return "success";
      default: return "default";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Tabs defaultValue="tickets" className="w-full">
          <TabsList className="mb-4 w-full sm:w-auto grid grid-cols-3 md:grid-cols-6">
            <TabsTrigger value="tickets" className="flex items-center gap-2">
              <LifeBuoy className="h-4 w-4" />
              <span className="hidden md:inline">التذاكر</span>
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span className="hidden md:inline">المحادثة</span>
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              <span className="hidden md:inline">الأسئلة الشائعة</span>
            </TabsTrigger>
            <TabsTrigger value="inquiries" className="flex items-center gap-2">
              <FileQuestion className="h-4 w-4" />
              <span className="hidden md:inline">الاستفسارات</span>
            </TabsTrigger>
            <TabsTrigger value="complaints" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              <span className="hidden md:inline">الشكاوى</span>
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">اتصل بنا</span>
            </TabsTrigger>
          </TabsList>

          {/* قسم التذاكر */}
          <TabsContent value="tickets" className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
              <h2 className="text-2xl font-bold">تذاكر الدعم الفني</h2>
              <div className="flex gap-4 w-full md:w-auto">
                <Input 
                  placeholder="بحث عن تذكرة..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-64"
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="brand">تذكرة جديدة</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>إنشاء تذكرة جديدة</DialogTitle>
                      <DialogDescription>
                        يرجى تعبئة البيانات التالية لإنشاء تذكرة دعم جديدة
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmitTicket}>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <label htmlFor="name" className="text-right">الاسم</label>
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="col-span-3"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <label htmlFor="email" className="text-right">البريد الإلكتروني</label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="col-span-3"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <label htmlFor="department" className="text-right">القسم</label>
                          <select
                            id="department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            className="col-span-3 p-2 border rounded-md"
                            required
                          >
                            <option value="support">الدعم الفني</option>
                            <option value="customer">خدمة العملاء</option>
                            <option value="complaint">الشكاوى</option>
                          </select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <label htmlFor="subject" className="text-right">الموضوع</label>
                          <Input
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="col-span-3"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <label htmlFor="message" className="text-right">الرسالة</label>
                          <Textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="col-span-3"
                            rows={4}
                            required
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">إرسال التذكرة</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table variant="striped">
                  <TableHeader sticky>
                    <TableRow>
                      <TableHead>رقم التذكرة</TableHead>
                      <TableHead>الموضوع</TableHead>
                      <TableHead>القسم</TableHead>
                      <TableHead>الحالة</TableHead>
                      <TableHead>الأولوية</TableHead>
                      <TableHead>التاريخ</TableHead>
                      <TableHead>الإجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTickets.length > 0 ? (
                      filteredTickets.map((ticket) => (
                        <TableRow key={ticket.id}>
                          <TableCell className="font-medium">{ticket.id}</TableCell>
                          <TableCell>{ticket.title}</TableCell>
                          <TableCell>{ticket.department}</TableCell>
                          <TableCell>
                            <Badge variant={getStatusBadgeVariant(ticket.status)}>
                              {ticket.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={getPriorityBadgeVariant(ticket.priority)}>
                              {ticket.priority}
                            </Badge>
                          </TableCell>
                          <TableCell>{ticket.date}</TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm">عرض</Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>تفاصيل التذكرة {ticket.id}</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4 py-4">
                                  <div className="flex justify-between">
                                    <span className="font-bold">الموضوع:</span>
                                    <span>{ticket.title}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="font-bold">القسم:</span>
                                    <span>{ticket.department}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="font-bold">الحالة:</span>
                                    <Badge variant={getStatusBadgeVariant(ticket.status)}>
                                      {ticket.status}
                                    </Badge>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="font-bold">الأولوية:</span>
                                    <Badge variant={getPriorityBadgeVariant(ticket.priority)}>
                                      {ticket.priority}
                                    </Badge>
                                  </div>
                                  <div className="flex justify-between">
                                    <span className="font-bold">التاريخ:</span>
                                    <span>{ticket.date}</span>
                                  </div>
                                  <div className="border-t pt-4">
                                    <h4 className="font-bold mb-2">محتوى التذكرة</h4>
                                    <p className="text-gray-700">
                                      هذا نص تجريبي لمحتوى التذكرة. سيتم عرض تفاصيل التذكرة والمراسلات المتعلقة بها هنا.
                                    </p>
                                  </div>
                                  <div className="border-t pt-4">
                                    <h4 className="font-bold mb-2">الرد</h4>
                                    <Textarea 
                                      placeholder="أضف رداً على هذه التذكرة..." 
                                      className="w-full mb-2" 
                                      rows={3}
                                    />
                                    <Button className="w-full">إرسال الرد</Button>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-8">
                          لا توجد تذاكر مطابقة لعملية البحث
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* قسم المحادثة */}
          <TabsContent value="chat" className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">المحادثات</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <Card className="h-[600px] flex flex-col">
                  <CardHeader>
                    <CardTitle>المحادثات النشطة</CardTitle>
                    <CardDescription>اختر محادثة للاستمرار</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-y-auto">
                    <div className="space-y-2">
                      {conversationsData.map((convo) => (
                        <div 
                          key={convo.id}
                          className="p-3 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center"
                        >
                          <div>
                            <div className="font-semibold">{convo.agent}</div>
                            <div className="text-sm text-gray-600 truncate max-w-[200px]">{convo.lastMessage}</div>
                            <div className="text-xs text-gray-400 mt-1">{convo.date}</div>
                          </div>
                          {convo.unread > 0 && (
                            <Badge variant="destructive" className="rounded-full min-w-[20px] h-5 flex items-center justify-center">
                              {convo.unread}
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      محادثة جديدة
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="lg:col-span-2">
                <Card className="h-[600px] flex flex-col">
                  <CardHeader className="border-b pb-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>محادثة مع خدمة العملاء</CardTitle>
                        <CardDescription>آخر نشاط: منذ 5 دقائق</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">إغلاق المحادثة</Button>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 overflow-y-auto py-4">
                    <div className="space-y-4">
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                          <p className="text-sm">مرحباً، كيف يمكنني مساعدتك اليوم؟</p>
                          <span className="text-xs text-gray-500 block mt-1">10:30 صباحاً</span>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-blue-100 rounded-lg p-3 max-w-[80%]">
                          <p className="text-sm">أحتاج مساعدة بخصوص الاستثمار في المشروع الجديد</p>
                          <span className="text-xs text-gray-500 block mt-1">10:32 صباحاً</span>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                          <p className="text-sm">بالتأكيد، هل يمكنك إخباري بالمزيد عن المشروع الذي تهتم به؟</p>
                          <span className="text-xs text-gray-500 block mt-1">10:35 صباحاً</span>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-blue-100 rounded-lg p-3 max-w-[80%]">
                          <p className="text-sm">المشروع العقاري في الرياض، أريد معرفة تفاصيل أكثر عن العوائد المتوقعة وخطة الاستثمار</p>
                          <span className="text-xs text-gray-500 block mt-1">10:37 صباحاً</span>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                          <p className="text-sm">شكراً للتوضيح. المشروع العقاري في الرياض له عائد متوقع يتراوح بين 8-12% سنوياً، مع فترة استثمار تبدأ من 3 سنوات. هل ترغب في مزيد من التفاصيل حول خطة السداد أو المخاطر المحتملة؟</p>
                          <span className="text-xs text-gray-500 block mt-1">10:40 صباحاً</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t p-4">
                    <div className="flex w-full gap-2">
                      <Textarea 
                        placeholder="اكتب رسالتك هنا..." 
                        value={supportMessage}
                        onChange={(e) => setSupportMessage(e.target.value)}
                        className="flex-1"
                        rows={2}
                      />
                      <Button onClick={handleSendSupportMessage}>
                        إرسال
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* قسم الأسئلة الشائعة */}
          <TabsContent value="faq" className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">الأسئلة الشائعة</h2>
            <Card>
              <CardHeader>
                <CardTitle>الأسئلة المتكررة</CardTitle>
                <CardDescription>إجابات على الأسئلة الأكثر شيوعاً</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {faqData.map((faq, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t">
                <p className="text-gray-600 text-sm">لم تجد إجابة لسؤالك؟ يمكنك <Button variant="link" className="h-auto p-0">إرسال استفسار</Button> أو التواصل مع فريق الدعم.</p>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* قسم الاستفسارات */}
          <TabsContent value="inquiries" className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">الاستفسارات</h2>
            <Card>
              <CardHeader>
                <CardTitle>إرسال استفسار</CardTitle>
                <CardDescription>يرجى تعبئة النموذج التالي وسيتم الرد عليك في أقرب وقت</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitTicket} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="inquiry-name" className="text-sm font-medium">الاسم الكامل</label>
                      <Input 
                        id="inquiry-name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="أدخل اسمك الكامل" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="inquiry-email" className="text-sm font-medium">البريد الإلكتروني</label>
                      <Input 
                        id="inquiry-email" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@example.com" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="inquiry-subject" className="text-sm font-medium">موضوع الاستفسار</label>
                    <Input 
                      id="inquiry-subject" 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="أدخل موضوع الاستفسار" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="inquiry-message" className="text-sm font-medium">الاستفسار</label>
                    <Textarea 
                      id="inquiry-message" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="تفاصيل الاستفسار" 
                      rows={6} 
                      required 
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-4">سيتم الرد على استفسارك خلال 24-48 ساعة عمل</p>
                    <Button type="submit" className="w-full md:w-auto">إرسال الاستفسار</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* قسم الشكاوى */}
          <TabsContent value="complaints" className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">الشكاوى</h2>
            <Card>
              <CardHeader>
                <CardTitle>تقديم شكوى</CardTitle>
                <CardDescription>نأسف لعدم رضاك عن خدماتنا، يرجى تعبئة نموذج الشكوى وسنعمل على معالجتها في أسرع وقت</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitTicket} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="complaint-name" className="text-sm font-medium">الاسم الكامل</label>
                      <Input 
                        id="complaint-name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="أدخل اسمك الكامل" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="complaint-email" className="text-sm font-medium">البريد الإلكتروني</label>
                      <Input 
                        id="complaint-email" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@example.com" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="complaint-subject" className="text-sm font-medium">موضوع الشكوى</label>
                    <Input 
                      id="complaint-subject" 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="أدخل موضوع الشكوى" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="complaint-department" className="text-sm font-medium">القسم المعني</label>
                    <select
                      id="complaint-department"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full p-2 border rounded-md"
                      required
                    >
                      <option value="customer">خدمة العملاء</option>
                      <option value="support">الدعم الفني</option>
                      <option value="finance">القسم المالي</option>
                      <option value="investments">قسم الاستثمارات</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="complaint-message" className="text-sm font-medium">تفاصيل الشكوى</label>
                    <Textarea 
                      id="complaint-message" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="يرجى ذكر تفاصيل الشكوى بوضوح" 
                      rows={6} 
                      required 
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-4">سيتم التعامل مع شكواك بسرية تامة والرد خلال 48 ساعة عمل</p>
                    <Button type="submit" variant="destructive" className="w-full md:w-auto">تقديم الشكوى</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* قسم اتصل بنا */}
          <TabsContent value="contact" className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">اتصل بنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>معلومات الاتصال</CardTitle>
                  <CardDescription>يمكنك التواصل معنا من خلال</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-hrm-blue" />
                    <div>
                      <p className="font-medium">رقم الهاتف</p>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-hrm-blue" />
                    <div>
                      <p className="font-medium">البريد الإلكتروني</p>
                      <p className="text-gray-600">{contactInfo.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-hrm-blue mt-1">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                      <path d="M9 2v4"></path>
                      <path d="M15 2v4"></path>
                      <path d="M2 10h20"></path>
                    </svg>
                    <div>
                      <p className="font-medium">ساعات العمل</p>
                      <p className="text-gray-600">{contactInfo.workingHours}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-hrm-blue mt-1">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <div>
                      <p className="font-medium">العنوان</p>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>نموذج الاتصال السريع</CardTitle>
                  <CardDescription>أرسل رسالة وسنتواصل معك في أقرب وقت</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="quick-name" className="text-sm font-medium">الاسم</label>
                      <Input id="quick-name" placeholder="أدخل اسمك" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="quick-email" className="text-sm font-medium">البريد الإلكتروني</label>
                      <Input id="quick-email" type="email" placeholder="example@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="quick-message" className="text-sm font-medium">الرسالة</label>
                      <Textarea id="quick-message" placeholder="اكتب رسالتك هنا" rows={4} />
                    </div>
                    <Button className="w-full">إرسال</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default CustomerSupport;
