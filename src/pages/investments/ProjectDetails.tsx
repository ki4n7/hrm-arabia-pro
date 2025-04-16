
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import { 
  Calendar, Users, Briefcase, BarChart, PieChart, ChevronLeft, 
  Banknote, TrendingUp, TrendingDown, FileText, ArrowUp, ArrowDown, Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle 
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock project data - would be fetched from a real API in production
const projectsData = [
  {
    id: 1,
    name: "برج الأعمال المركزي",
    location: "الرياض - حي العليا",
    description: "برج مكتبي فاخر يتكون من 30 طابقاً في قلب الحي التجاري بالرياض، يوفر مساحات مكتبية حديثة ومرافق متكاملة.",
    totalInvestment: 15000000,
    returnRate: 12.5,
    trending: "up",
    progress: 65,
    investors: 8,
    status: "قيد التنفيذ",
    startDate: "2023-06-15",
    endDate: "2025-12-30",
    manager: "عبدالله محمد",
    totalArea: "8,500 متر مربع",
    expectedROI: "15.2%",
    riskLevel: "متوسط",
    sector: "عقارات تجارية",
    projectImages: [], // Would contain image URLs in a real application
    milestones: [
      { title: "شراء الأرض", completionDate: "2023-06-15", status: "مكتمل", progress: 100 },
      { title: "الحصول على التراخيص", completionDate: "2023-08-20", status: "مكتمل", progress: 100 },
      { title: "أعمال الحفر والأساسات", completionDate: "2023-11-30", status: "مكتمل", progress: 100 },
      { title: "البناء الهيكلي", completionDate: "2024-06-30", status: "قيد التنفيذ", progress: 65 },
      { title: "التشطيبات الداخلية", completionDate: "2025-04-15", status: "مخطط", progress: 0 },
      { title: "تركيب الأنظمة والمرافق", completionDate: "2025-08-20", status: "مخطط", progress: 0 },
      { title: "التسليم النهائي", completionDate: "2025-12-30", status: "مخطط", progress: 0 }
    ],
    investorsDetails: [
      { id: 1, name: "محمد أحمد", investmentAmount: 2500000, joinDate: "2023-05-01", share: "16.7%" },
      { id: 2, name: "سارة خالد", investmentAmount: 3000000, joinDate: "2023-05-05", share: "20%" },
      { id: 3, name: "عبدالله العتيبي", investmentAmount: 1800000, joinDate: "2023-05-10", share: "12%" },
      { id: 4, name: "نورة سعد", investmentAmount: 1500000, joinDate: "2023-05-15", share: "10%" },
      { id: 5, name: "فهد الشمري", investmentAmount: 2200000, joinDate: "2023-05-20", share: "14.7%" },
      { id: 6, name: "لمى الحربي", investmentAmount: 1500000, joinDate: "2023-05-22", share: "10%" },
      { id: 7, name: "خالد الدوسري", investmentAmount: 1200000, joinDate: "2023-05-25", share: "8%" },
      { id: 8, name: "عمر القحطاني", investmentAmount: 1300000, joinDate: "2023-05-28", share: "8.6%" }
    ],
    financialData: {
      quarterlyReturns: [
        { quarter: "Q1 2023", amount: 0, status: "فترة بناء" },
        { quarter: "Q2 2023", amount: 0, status: "فترة بناء" },
        { quarter: "Q3 2023", amount: 0, status: "فترة بناء" },
        { quarter: "Q4 2023", amount: 0, status: "فترة بناء" },
        { quarter: "Q1 2024", amount: 0, status: "فترة بناء" },
        { quarter: "Q2 2024", amount: 0, status: "فترة بناء" },
        { quarter: "Q3 2024", amount: 250000, status: "أول عائد" },
        { quarter: "Q4 2024", amount: 480000, status: "نشط" },
        { quarter: "Q1 2025", amount: 520000, status: "نشط" },
      ],
      expenses: [
        { category: "تكلفة الأرض", amount: 4200000, percentage: 28 },
        { category: "تكاليف البناء", amount: 7800000, percentage: 52 },
        { category: "التصاميم والاستشارات", amount: 900000, percentage: 6 },
        { category: "التراخيص والرسوم", amount: 600000, percentage: 4 },
        { category: "المرافق والأنظمة", amount: 1200000, percentage: 8 },
        { category: "أخرى", amount: 300000, percentage: 2 }
      ],
      monthlyReports: [
        { month: "يناير 2024", completionAdded: "5%", expensesAmount: 750000, notes: "تأخير بسيط بسبب الأحوال الجوية" },
        { month: "فبراير 2024", completionAdded: "4%", expensesAmount: 620000, notes: "تم استئناف العمل بشكل طبيعي" },
        { month: "مارس 2024", completionAdded: "6%", expensesAmount: 800000, notes: "وتيرة العمل تتقدم بشكل جيد" },
        { month: "أبريل 2024", completionAdded: "5%", expensesAmount: 730000, notes: "تم الانتهاء من الطابق العاشر" }
      ]
    },
    riskAnalysis: {
      marketRisk: { level: "منخفض", description: "موقع متميز في منطقة ذات طلب مرتفع" },
      operationalRisk: { level: "متوسط", description: "احتمالية تأخير في مواد البناء" },
      financialRisk: { level: "منخفض", description: "تمويل مستقر وتكاليف محددة مسبقاً" },
      regulatoryRisk: { level: "منخفض", description: "جميع التصاريح تم الحصول عليها" }
    },
    updates: [
      { date: "2024-04-10", title: "اكتمال البناء الهيكلي للطابق 15", description: "تم الانتهاء من صب الخرسانة للطابق 15 حسب الجدول الزمني المخطط له." },
      { date: "2024-03-22", title: "توقيع عقد مع شركة التشطيبات", description: "تم التعاقد مع شركة متخصصة للبدء في أعمال التشطيبات بمجرد اكتمال الهيكل." },
      { date: "2024-02-15", title: "زيارة المستثمرين للموقع", description: "تمت زيارة جماعية للمستثمرين لموقع المشروع للاطلاع على سير العمل." },
      { date: "2024-01-05", title: "الحصول على تمويل إضافي", description: "تم الحصول على دفعة التمويل الثالثة من البنك حسب الاتفاق." }
    ]
  },
  {
    id: 2,
    name: "مجمع الواحة السكني",
    location: "جدة - حي الشاطئ",
    description: "مجمع سكني فاخر يضم 120 وحدة سكنية متنوعة مع مرافق ترفيهية متكاملة على الواجهة البحرية في جدة.",
    totalInvestment: 8500000,
    returnRate: 9.8,
    trending: "up",
    progress: 40,
    investors: 6,
    status: "قيد التنفيذ",
    startDate: "2023-09-01",
    endDate: "2025-03-15",
    manager: "خالد العنزي",
    totalArea: "12,000 متر مربع",
    expectedROI: "11.3%",
    riskLevel: "منخفض",
    sector: "عقارات سكنية",
    milestones: [
      { title: "شراء الأرض", completionDate: "2023-09-01", status: "مكتمل", progress: 100 },
      { title: "الحصول على التراخيص", completionDate: "2023-10-15", status: "مكتمل", progress: 100 },
      { title: "أعمال الحفر والأساسات", completionDate: "2024-01-30", status: "مكتمل", progress: 100 },
      { title: "البناء الهيكلي", completionDate: "2024-08-30", status: "قيد التنفيذ", progress: 40 },
      { title: "التشطيبات الداخلية", completionDate: "2025-01-15", status: "مخطط", progress: 0 },
      { title: "التسليم النهائي", completionDate: "2025-03-15", status: "مخطط", progress: 0 }
    ],
    investorsDetails: [
      { id: 1, name: "أحمد الزهراني", investmentAmount: 1800000, joinDate: "2023-08-05", share: "21.2%" },
      { id: 2, name: "هند المالكي", investmentAmount: 1500000, joinDate: "2023-08-10", share: "17.6%" },
      { id: 3, name: "سلطان القرشي", investmentAmount: 1200000, joinDate: "2023-08-15", share: "14.1%" },
      { id: 4, name: "ريم الحربي", investmentAmount: 1500000, joinDate: "2023-08-20", share: "17.6%" },
      { id: 5, name: "ماجد العتيبي", investmentAmount: 1300000, joinDate: "2023-08-25", share: "15.3%" },
      { id: 6, name: "نوف السليم", investmentAmount: 1200000, joinDate: "2023-08-30", share: "14.1%" }
    ],
    financialData: {
      quarterlyReturns: [
        { quarter: "Q3 2023", amount: 0, status: "فترة بناء" },
        { quarter: "Q4 2023", amount: 0, status: "فترة بناء" },
        { quarter: "Q1 2024", amount: 0, status: "فترة بناء" },
        { quarter: "Q2 2024", amount: 0, status: "فترة بناء" },
        { quarter: "Q3 2024", amount: 0, status: "فترة بناء" },
        { quarter: "Q4 2024", amount: 180000, status: "أول عائد" },
        { quarter: "Q1 2025", amount: 310000, status: "نشط" }
      ],
      expenses: [
        { category: "تكلفة الأرض", amount: 3000000, percentage: 35.3 },
        { category: "تكاليف البناء", amount: 4200000, percentage: 49.4 },
        { category: "التصاميم والاستشارات", amount: 500000, percentage: 5.9 },
        { category: "التراخيص والرسوم", amount: 350000, percentage: 4.1 },
        { category: "المرافق والأنظمة", amount: 300000, percentage: 3.5 },
        { category: "أخرى", amount: 150000, percentage: 1.8 }
      ],
      monthlyReports: [
        { month: "يناير 2024", completionAdded: "6%", expensesAmount: 480000, notes: "بدء العمل في المبنى الأول" },
        { month: "فبراير 2024", completionAdded: "5%", expensesAmount: 420000, notes: "تم استكمال الأساسات للمباني المتبقية" },
        { month: "مارس 2024", completionAdded: "7%", expensesAmount: 530000, notes: "بدء العمل في البنية التحتية" },
        { month: "أبريل 2024", completionAdded: "5%", expensesAmount: 410000, notes: "استكمال المبنى الأول حتى الطابق الثالث" }
      ]
    },
    updates: [
      { date: "2024-04-05", title: "استكمال المبنى الأول حتى الطابق الثالث", description: "تم استكمال أعمال البناء للمبنى الأول حتى الطابق الثالث وفق الخطة الزمنية." },
      { date: "2024-03-15", title: "بدء أعمال البنية التحتية", description: "تم البدء في تنفيذ أعمال البنية التحتية للمجمع بما في ذلك شبكات المياه والكهرباء." },
      { date: "2024-02-20", title: "اكتمال الأساسات", description: "تم الانتهاء من أعمال الأساسات لجميع مباني المجمع." },
      { date: "2024-01-10", title: "توريد مواد البناء", description: "تم توريد الدفعة الأولى من مواد البناء وتخزينها في الموقع." }
    ],
    riskAnalysis: {
      marketRisk: { level: "منخفض", description: "موقع مميز على الواجهة البحرية" },
      operationalRisk: { level: "منخفض", description: "فريق بناء ذو خبرة عالية" },
      financialRisk: { level: "منخفض", description: "تمويل مضمون بالكامل" },
      regulatoryRisk: { level: "منخفض", description: "جميع التصاريح مكتملة" }
    }
  },
  // Adding other projects with full data structure
  {
    id: 3,
    name: "مركز التسوق الجديد",
    location: "الدمام - حي الفيصلية",
    description: "مركز تسوق حديث يضم أكثر من 150 متجراً ومساحات ترفيهية متنوعة ومطاعم عالمية في موقع استراتيجي بالدمام.",
    totalInvestment: 22000000,
    returnRate: 15.2,
    trending: "up",
    progress: 25,
    investors: 12,
    status: "قيد التنفيذ",
    startDate: "2024-01-10",
    endDate: "2026-07-25",
    manager: "فهد الشمري",
    totalArea: "25,000 متر مربع",
    expectedROI: "18.5%",
    riskLevel: "متوسط",
    sector: "مراكز تجارية",
    milestones: [
      { title: "شراء الأرض", completionDate: "2024-01-10", status: "مكتمل", progress: 100 },
      { title: "التصاميم الهندسية", completionDate: "2024-03-15", status: "مكتمل", progress: 100 },
      { title: "الحصول على التراخيص", completionDate: "2024-04-30", status: "قيد التنفيذ", progress: 80 },
      { title: "أعمال الحفر", completionDate: "2024-06-30", status: "مخطط", progress: 0 },
      { title: "البناء الهيكلي", completionDate: "2025-08-30", status: "مخطط", progress: 0 },
      { title: "التشطيبات والديكورات", completionDate: "2026-05-30", status: "مخطط", progress: 0 },
      { title: "التسليم النهائي", completionDate: "2026-07-25", status: "مخطط", progress: 0 }
    ],
    investorsDetails: [
      { id: 1, name: "شركة البلاد للاستثمار", investmentAmount: 5000000, joinDate: "2023-12-01", share: "22.7%" },
      { id: 2, name: "سعود المطيري", investmentAmount: 2500000, joinDate: "2023-12-05", share: "11.4%" },
      { id: 3, name: "منيرة الحميد", investmentAmount: 1800000, joinDate: "2023-12-10", share: "8.2%" },
      { id: 4, name: "عبدالرحمن الزهراني", investmentAmount: 1500000, joinDate: "2023-12-15", share: "6.8%" },
      { id: 5, name: "شركة نماء العقارية", investmentAmount: 4000000, joinDate: "2023-12-20", share: "18.2%" },
      { id: 6, name: "تركي العتيبي", investmentAmount: 1200000, joinDate: "2023-12-25", share: "5.5%" },
      { id: 7, name: "هناء الجبر", investmentAmount: 1000000, joinDate: "2024-01-01", share: "4.5%" },
      { id: 8, name: "شركة آفاق للاستثمار", investmentAmount: 2000000, joinDate: "2024-01-05", share: "9.1%" },
      { id: 9, name: "محمد الغامدي", investmentAmount: 1000000, joinDate: "2024-01-10", share: "4.5%" },
      { id: 10, name: "نوال السبيعي", investmentAmount: 800000, joinDate: "2024-01-15", share: "3.6%" },
      { id: 11, name: "صندوق الاستثمارات الخليجية", investmentAmount: 800000, joinDate: "2024-01-20", share: "3.6%" },
      { id: 12, name: "سلمان القحطاني", investmentAmount: 400000, joinDate: "2024-01-25", share: "1.8%" }
    ],
    financialData: {
      quarterlyReturns: [
        { quarter: "Q1 2024", amount: 0, status: "فترة بناء" },
        { quarter: "Q2 2024", amount: 0, status: "فترة بناء" },
        { quarter: "Q3 2024", amount: 0, status: "فترة بناء" },
        { quarter: "Q4 2024", amount: 0, status: "فترة بناء" },
        { quarter: "Q1 2025", amount: 0, status: "فترة بناء" },
        { quarter: "Q2 2025", amount: 0, status: "فترة بناء" },
        { quarter: "Q3 2025", amount: 0, status: "فترة بناء" },
        { quarter: "Q4 2025", amount: 0, status: "فترة بناء" },
        { quarter: "Q1 2026", amount: 0, status: "فترة بناء" },
        { quarter: "Q2 2026", amount: 0, status: "فترة بناء" },
        { quarter: "Q3 2026", amount: 750000, status: "أول عائد" },
        { quarter: "Q4 2026", amount: 850000, status: "نشط" }
      ],
      expenses: [
        { category: "تكلفة الأرض", amount: 6000000, percentage: 27.3 },
        { category: "تكاليف البناء", amount: 10500000, percentage: 47.7 },
        { category: "التصاميم والاستشارات", amount: 1200000, percentage: 5.5 },
        { category: "التراخيص والرسوم", amount: 800000, percentage: 3.6 },
        { category: "المرافق والأنظمة", amount: 2500000, percentage: 11.4 },
        { category: "التسويق والإطلاق", amount: 500000, percentage: 2.3 },
        { category: "أخرى", amount: 500000, percentage: 2.3 }
      ],
      monthlyReports: [
        { month: "يناير 2024", completionAdded: "2%", expensesAmount: 6000000, notes: "تم شراء الأرض" },
        { month: "فبراير 2024", completionAdded: "3%", expensesAmount: 500000, notes: "بدء أعمال التصميم الهندسي" },
        { month: "مارس 2024", completionAdded: "5%", expensesAmount: 700000, notes: "اكتمال التصاميم الهندسية" },
        { month: "أبريل 2024", completionAdded: "3%", expensesAmount: 400000, notes: "تقديم طلبات التراخيص للجهات المختصة" }
      ]
    },
    updates: [
      { date: "2024-04-15", title: "تقديم طلبات التراخيص", description: "تم تقديم جميع المستندات المطلوبة للحصول على التراخيص اللازمة من الجهات المختصة." },
      { date: "2024-03-25", title: "اكتمال التصاميم الهندسية", description: "تم الانتهاء من إعداد جميع التصاميم الهندسية والمعمارية للمشروع." },
      { date: "2024-02-10", title: "توقيع عقد مع شركة الاستشارات الهندسية", description: "تم التعاقد مع شركة استشارات هندسية مرموقة لإعداد التصاميم." },
      { date: "2024-01-15", title: "اكتمال شراء الأرض", description: "تم الانتهاء من إجراءات شراء الأرض وتسجيلها رسمياً باسم الشركة." }
    ],
    riskAnalysis: {
      marketRisk: { level: "منخفض", description: "طلب مرتفع على المراكز التجارية في المنطقة" },
      operationalRisk: { level: "متوسط", description: "حجم المشروع كبير ويتطلب إدارة دقيقة" },
      financialRisk: { level: "منخفض", description: "تمويل مضمون من المستثمرين والبنوك" },
      regulatoryRisk: { level: "متوسط", description: "بعض التحديات في الحصول على بعض التصاريح" }
    }
  },
  {
    id: 4,
    name: "مشروع الطاقة الشمسية",
    location: "تبوك - المنطقة الصناعية",
    description: "مشروع لتوليد الطاقة الشمسية بقدرة 50 ميجاوات، يهدف لتزويد المنطقة الصناعية بالطاقة النظيفة والمتجددة.",
    totalInvestment: 35000000,
    returnRate: 8.5,
    trending: "down",
    progress: 15,
    investors: 14,
    status: "مرحلة التخطيط",
    startDate: "2024-04-01",
    endDate: "2027-06-30",
    manager: "د. محمد العوفي",
    totalArea: "120,000 متر مربع",
    expectedROI: "10.2%",
    riskLevel: "مرتفع",
    sector: "الطاقة المتجددة",
    milestones: [
      { title: "دراسة الجدوى", completionDate: "2024-04-01", status: "مكتمل", progress: 100 },
      { title: "استئجار الأرض", completionDate: "2024-06-15", status: "قيد التنفيذ", progress: 80 },
      { title: "الحصول على التراخيص", completionDate: "2024-09-30", status: "قيد التنفيذ", progress: 40 },
      { title: "توريد الألواح الشمسية", completionDate: "2025-03-30", status: "مخطط", progress: 0 },
      { title: "تركيب محطة التحويل", completionDate: "2025-08-30", status: "مخطط", progress: 0 },
      { title: "تركيب الألواح الشمسية", completionDate: "2026-12-30", status: "مخطط", progress: 0 },
      { title: "الاختبار والتشغيل", completionDate: "2027-06-30", status: "مخطط", progress: 0 }
    ],
    investorsDetails: [
      { id: 1, name: "صندوق الاستثمارات العامة", investmentAmount: 10000000, joinDate: "2024-02-01", share: "28.6%" },
      { id: 2, name: "شركة الطاقة السعودية", investmentAmount: 5000000, joinDate: "2024-02-10", share: "14.3%" },
      { id: 3, name: "بنك التنمية الصناعية", investmentAmount: 4500000, joinDate: "2024-02-15", share: "12.9%" },
      { id: 4, name: "شركة المستقبل للطاقة", investmentAmount: 3000000, joinDate: "2024-02-20", share: "8.6%" },
      { id: 5, name: "عبدالله الراجحي", investmentAmount: 2000000, joinDate: "2024-02-25", share: "5.7%" },
      { id: 6, name: "سعود العنزي", investmentAmount: 1500000, joinDate: "2024-03-01", share: "4.3%" },
      { id: 7, name: "شركة البحر الأحمر للتطوير", investmentAmount: 1500000, joinDate: "2024-03-05", share: "4.3%" },
      { id: 8, name: "صالح الشهراني", investmentAmount: 1000000, joinDate: "2024-03-10", share: "2.9%" },
      { id: 9, name: "نورة الزهراني", investmentAmount: 1000000, joinDate: "2024-03-15", share: "2.9%" },
      { id: 10, name: "شركة الخليج للاستثمار", investmentAmount: 1500000, joinDate: "2024-03-20", share: "4.3%" },
      { id: 11, name: "محمد السبيعي", investmentAmount: 1000000, joinDate: "2024-03-25", share: "2.9%" },
      { id: 12, name: "شركة تبوك للتنمية", investmentAmount: 1500000, joinDate: "2024-03-30", share: "4.3%" },
      { id: 13, name: "خالد الحربي", investmentAmount: 750000, joinDate: "2024-04-05", share: "2.1%" },
      { id: 14, name: "منيرة العتيبي", investmentAmount: 750000, joinDate: "2024-04-10", share: "2.1%" }
    ],
    financialData: {
      quarterlyReturns: [
        { quarter: "Q2 2024", amount: 0, status: "فترة بناء" },
        { quarter: "Q3 2024", amount: 0, status: "فترة بناء" },
        { quarter: "Q4 2024", amount: 0, status: "فترة بناء" },
        { quarter: "Q1 2025", amount: 0, status: "فترة بناء" },
        { quarter: "Q2 2025", amount: 0, status: "فترة بناء" },
        { quarter: "Q3 2025", amount: 0, status: "فترة بناء" },
        { quarter: "Q4 2025", amount: 0, status: "فترة بناء" },
        { quarter: "Q1 2026", amount: 0, status: "فترة بناء" },
        { quarter: "Q2 2026", amount: 0, status: "فترة بناء" },
        { quarter: "Q3 2026", amount: 0, status: "فترة بناء" },
        { quarter: "Q4 2026", amount: 0, status: "فترة بناء" },
        { quarter: "Q1 2027", amount: 0, status: "فترة بناء" },
        { quarter: "Q2 2027", amount: 0, status: "فترة بناء" },
        { quarter: "Q3 2027", amount: 700000, status: "أول عائد" },
        { quarter: "Q4 2027", amount: 750000, status: "نشط" }
      ],
      expenses: [
        { category: "استئجار الأرض", amount: 3000000, percentage: 8.6 },
        { category: "شراء الألواح الشمسية", amount: 18000000, percentage: 51.4 },
        { category: "معدات التحويل والتخزين", amount: 8000000, percentage: 22.9 },
        { category: "أعمال الهندسة والتركيب", amount: 4000000, percentage: 11.4 },
        { category: "التراخيص والرسوم", amount: 1000000, percentage: 2.9 },
        { category: "أخرى", amount: 1000000, percentage: 2.9 }
      ],
      monthlyReports: [
        { month: "أبريل 2024", completionAdded: "3%", expensesAmount: 500000, notes: "اكتمال دراسة الجدوى وبدء التفاوض على استئجار الأرض" },
        { month: "مايو 2024", completionAdded: "4%", expensesAmount: 800000, notes: "استمرار المفاوضات مع الجهات المختصة" },
        { month: "يونيو 2024", completionAdded: "5%", expensesAmount: 1500000, notes: "توقيع العقد المبدئي لاستئجار الأرض" },
        { month: "يوليو 2024", completionAdded: "3%", expensesAmount: 600000, notes: "بدء إجراءات التراخيص البيئية" }
      ]
    },
    updates: [
      { date: "2024-04-20", title: "اكتمال دراسة الجدوى", description: "تم الانتهاء من دراسة الجدوى الاقتصادية والفنية للمشروع وتأكيد جدواه." },
      { date: "2024-05-15", title: "التفاوض على استئجار الأرض", description: "بدأت المفاوضات مع مدينة تبوك الصناعية لاستئجار الموقع المناسب للمشروع." },
      { date: "2024-06-10", title: "توقيع العقد المبدئي", description: "تم توقيع العقد المبدئي لاستئجار الأرض لمدة 30 عامًا." },
      { date: "2024-07-05", title: "تقديم طلبات التراخيص البيئية", description: "تم تقديم الدراسات البيئية والطلبات اللازمة للحصول على التراخيص البيئية." }
    ],
    riskAnalysis: {
      marketRisk: { level: "متوسط", description: "تذبذب أسعار الكهرباء وسياسات الدعم" },
      operationalRisk: { level: "مرتفع", description: "تحديات تقنية في تنفيذ مشروع بهذا الحجم" },
      financialRisk: { level: "متوسط", description: "ارتفاع التكلفة الأولية وطول فترة الاسترداد" },
      regulatoryRisk: { level: "مرتفع", description: "تغيرات محتملة في التشريعات المنظمة لقطاع الطاقة" }
    }
  },
  {
    id: 5,
    name: "مجمع المكاتب الذكية",
    location: "الرياض - حي الملقا",
    description: "مجمع مكاتب ذكية يضم مساحات عمل مرنة ومجهزة بأحدث التقنيات، مصمم لتلبية احتياجات الشركات الناشئة والمؤسسات الصغيرة والمتوسطة.",
    totalInvestment: 18000000,
    returnRate: 11.3,
    trending: "up",
    progress: 80,
    investors: 9,
    status: "قيد التنفيذ",
    startDate: "2022-11-20",
    endDate: "2024-10-15",
    manager: "سلطان الغامدي",
    totalArea: "5,200 متر مربع",
    expectedROI: "13.5%",
    riskLevel: "منخفض",
    sector: "عقارات تجارية",
    milestones: [
      { title: "شراء المبنى", completionDate: "2022-11-20", status: "مكتمل", progress: 100 },
      { title: "التصميم الداخلي", completionDate: "2023-02-15", status: "مكتمل", progress: 100 },
      { title: "أعمال الهدم والإزالة", completionDate: "2023-05-10", status: "مكتمل", progress: 100 },
      { title: "إعادة الإنشاء والتجديد", completionDate: "2023-12-30", status: "مكتمل", progress: 100 },
      { title: "تركيب الأنظمة الذكية", completionDate: "2024-06-15", status: "قيد التنفيذ", progress: 75 },
      { title: "التشطيبات النهائية", completionDate: "2024-09-15", status: "مخطط", progress: 20 },
      { title: "التسليم النهائي", completionDate: "2024-10-15", status: "مخطط", progress: 0 }
    ],
    investorsDetails: [
      { id: 1, name: "شركة المساحات الذكية", investmentAmount: 5000000, joinDate: "2022-10-01", share: "27.8%" },
      { id: 2, name: "خالد القحطاني", investmentAmount: 3000000, joinDate: "2022-10-05", share: "16.7%" },
      { id: 3, name: "صندوق دعم المشاريع الصغيرة", investmentAmount: 2500000, joinDate: "2022-10-10", share: "13.9%" },
      { id: 4, name: "سارة الزهراني", investmentAmount: 1500000, joinDate: "2022-10-15", share: "8.3%" },
      { id: 5, name: "محمد العتيبي", investmentAmount: 1500000, joinDate: "2022-10-20", share: "8.3%" },
      { id: 6, name: "شركة الرياض للتطوير", investmentAmount: 2000000, joinDate: "2022-10-25", share: "11.1%" },
      { id: 7, name: "نوف الدوسري", investmentAmount: 1000000, joinDate: "2022-11-01", share: "5.6%" },
      { id: 8, name: "عبدالعزيز الشمري", investmentAmount: 1000000, joinDate: "2022-11-05", share: "5.6%" },
      { id: 9, name: "شركة التقنية المتقدمة", investmentAmount: 500000, joinDate: "2022-11-10", share: "2.8%" }
    ],
    financialData: {
      quarterlyReturns: [
        { quarter: "Q4 2022", amount: 0, status: "فترة بناء" },
        { quarter: "Q1 2023", amount: 0, status: "فترة بناء" },
        { quarter: "Q2 2023", amount: 0, status: "فترة بناء" },
        { quarter: "Q3 2023", amount: 0, status: "فترة بناء" },
        { quarter: "Q4 2023", amount: 0, status: "فترة بناء" },
        { quarter: "Q1 2024", amount: 0, status: "فترة بناء" },
        { quarter: "Q2 2024", amount: 0, status: "فترة بناء" },
        { quarter: "Q3 2024", amount: 0, status: "فترة بناء" },
        { quarter: "Q4 2024", amount: 450000, status: "أول عائد" },
        { quarter: "Q1 2025", amount: 520000, status: "نشط" }
      ],
      expenses: [
        { category: "شراء المبنى", amount: 9000000, percentage: 50.0 },
        { category: "أعمال التجديد", amount: 5500000, percentage: 30.6 },
        { category: "الأنظمة الذكية", amount: 2500000, percentage: 13.9 },
        { category: "التصاميم والاستشارات", amount: 500000, percentage: 2.8 },
        { category: "التراخيص والرسوم", amount: 200000, percentage: 1.1 },
        { category: "أخرى", amount: 300000, percentage: 1.7 }
      ],
      monthlyReports: [
        { month: "يناير 2024", completionAdded: "3%", expensesAmount: 400000, notes: "بدء تركيب الأنظمة الذكية" },
        { month: "فبراير 2024", completionAdded: "5%", expensesAmount: 650000, notes: "استكمال الأنظمة الأمنية ونظام التحكم البيئي" },
        { month: "مارس 2024", completionAdded: "6%", expensesAmount: 750000, notes: "تركيب نظام إدارة المبنى الذكي" },
        { month: "أبريل 2024", completionAdded: "4%", expensesAmount: 550000, notes: "تركيب شبكات الاتصال والإنترنت عالي السرعة" }
      ]
    },
    updates: [
      { date: "2024-04-15", title: "اكتمال تركيب شبكات الاتصال", description: "تم الانتهاء من تركيب شبكات الألياف البصرية والإنترنت عالي السرعة في جميع أنحاء المبنى." },
      { date: "2024-03-20", title: "تركيب نظام إدارة المبنى", description: "تم تركيب وتشغيل نظام إدارة المبنى الذكي الذي يتحكم في الإضاءة والتكييف والأمان." },
      { date: "2024-02-10", title: "استكمال الأنظمة الأمنية", description: "تم تركيب كاميرات المراقبة وأنظمة التحكم في الدخول في جميع المداخل والمناطق الحساسة." },
      { date: "2024-01-05", title: "بدء تركيب الأنظمة الذكية", description: "بدأ العمل في تركيب الأنظمة الذكية بعد اكتمال أعمال التجديد الرئيسية." }
    ],
    riskAnalysis: {
      marketRisk: { level: "منخفض", description: "طلب متزايد على مساحات العمل المرنة" },
      operationalRisk: { level: "منخفض", description: "فريق إدارة ذو خبرة في تشغيل المساحات المكتبية" },
      financialRisk: { level: "منخفض", description: "تكلفة مناسبة مع عوائد جيدة متوقعة" },
      regulatoryRisk: { level: "منخفض", description: "توافق كامل مع اللوائح التنظيمية للمباني التجارية" }
    }
  },
  {
    id: 6,
    name: "منتجع سياحي",
    location: "أبها - الهضبة الغربية",
    description: "منتجع سياحي فاخر في مرتفعات أبها، يتضمن 45 وحدة سكنية ومرافق ترفيهية متكاملة ومطاعم فاخرة ومناظر طبيعية خلابة.",
    totalInvestment: 42000000,
    returnRate: 16.8,
    trending: "up",
    progress: 5,
    investors: 18,
    status: "مرحلة التخطيط",
    startDate: "2024-06-15",
    endDate: "2027-12-31",
    manager: "ماجد الشهري",
    totalArea: "60,000 متر مربع",
    expectedROI: "19.5%",
    riskLevel: "متوسط",
    sector: "السياحة والضيافة",
    milestones: [
      { title: "دراسة الجدوى", completionDate: "2024-06-15", status: "قيد التنفيذ", progress: 85 },
      { title: "شراء الأرض", completionDate: "2024-09-30", status: "مخطط", progress: 0 },
      { title: "التصاميم والمخططات", completionDate: "2025-03-31", status: "مخطط", progress: 0 },
      { title: "الحصول على التراخيص", completionDate: "2025-06-30", status: "مخطط", progress: 0 },
      { title: "أعمال البنية التحتية", completionDate: "2026-02-28", status: "مخطط", progress: 0 },
      { title: "البناء والإنشاء", completionDate: "2027-06-30", status: "مخطط", progress: 0 },
      { title: "التأثيث والتجهيز", completionDate: "2027-11-30", status: "مخطط", progress: 0 },
      { title: "الافتتاح", completionDate: "2027-12-31", status: "مخطط", progress: 0 }
    ],
    investorsDetails: [
      { id: 1, name: "شركة السياحة السعودية", investmentAmount: 10000000, joinDate: "2024-05-01", share: "23.8%" },
      { id: 2, name: "صندوق التنمية السياحي", investmentAmount: 8000000, joinDate: "2024-05-05", share: "19.0%" },
      { id: 3, name: "خالد الفيصل", investmentAmount: 3000000, joinDate: "2024-05-10", share: "7.1%" },
      { id: 4, name: "شركة أبها للاستثمار", investmentAmount: 2500000, joinDate: "2024-05-15", share: "6.0%" },
      { id: 5, name: "محمد آل سعود", investmentAmount: 2000000, joinDate: "2024-05-20", share: "4.8%" },
      { id: 6, name: "سارة القحطاني", investmentAmount: 1500000, joinDate: "2024-05-25", share: "3.6%" },
      { id: 7, name: "شركة الفنادق العالمية", investmentAmount: 2500000, joinDate: "2024-05-30", share: "6.0%" },
      { id: 8, name: "بندر الشمري", investmentAmount: 1000000, joinDate: "2024-06-01", share: "2.4%" },
      { id: 9, name: "نورة الزهراني", investmentAmount: 1000000, joinDate: "2024-06-02", share: "2.4%" },
      { id: 10, name: "شركة فنادق الخليج", investmentAmount: 2000000, joinDate: "2024-06-03", share: "4.8%" },
      { id: 11, name: "أحمد العسيري", investmentAmount: 1000000, joinDate: "2024-06-04", share: "2.4%" },
      { id: 12, name: "منى الشهري", investmentAmount: 1000000, joinDate: "2024-06-05", share: "2.4%" },
      { id: 13, name: "صندوق الاستثمارات الجنوبية", investmentAmount: 1500000, joinDate: "2024-06-06", share: "3.6%" },
      { id: 14, name: "عبدالله القرني", investmentAmount: 1000000, joinDate: "2024-06-07", share: "2.4%" },
      { id: 15, name: "لولوة الدوسري", investmentAmount: 1000000, joinDate: "2024-06-08", share: "2.4%" },
      { id: 16, name: "شركة التطوير السياحي", investmentAmount: 1500000, joinDate: "2024-06-09", share: "3.6%" },
      { id: 17, name: "فهد العتيبي", investmentAmount: 1000000, joinDate: "2024-06-10", share: "2.4%" },
      { id: 18, name: "هيئة تطوير منطقة عسير", investmentAmount: 500000, joinDate: "2024-06-11", share: "1.2%" }
    ],
    financialData: {
      quarterlyReturns: [
        { quarter: "Q3 2024", amount: 0, status: "مرحلة التخطيط" },
        { quarter: "Q4 2024", amount: 0, status: "مرحلة التخطيط" },
        { quarter: "2025-2027", amount: 0, status: "فترة البناء" },
        { quarter: "Q1 2028", amount: 1750000, status: "أول عائد" },
        { quarter: "Q2 2028", amount: 1850000, status: "نشط" }
      ],
      expenses: [
        { category: "شراء الأرض", amount: 12000000, percentage: 28.6 },
        { category: "أعمال البنية التحتية", amount: 6500000, percentage: 15.5 },
        { category: "البناء والإنشاء", amount: 15000000, percentage: 35.7 },
        { category: "التأثيث والتجهيز", amount: 5500000, percentage: 13.1 },
        { category: "التصاميم والاستشارات", amount: 1500000, percentage: 3.6 },
        { category: "التراخيص والرسوم", amount: 1000000, percentage: 2.4 },
        { category: "أخرى", amount: 500000, percentage: 1.2 }
      ],
      monthlyReports: [
        { month: "مايو 2024", completionAdded: "2%", expensesAmount: 200000, notes: "بدء دراسة الجدوى وجمع البيانات" },
        { month: "يونيو 2024", completionAdded: "3%", expensesAmount: 250000, notes: "استكمال دراسة الجدوى واختيار الموقع" }
      ]
    },
    updates: [
      { date: "2024-06-10", title: "اختيار موقع المشروع", description: "تم الانتهاء من المفاضلة بين المواقع المقترحة واختيار الموقع النهائي في الهضبة الغربية." },
      { date: "2024-05-20", title: "استكمال دراسة الجدوى الأولية", description: "أظهرت دراسة الجدوى الأولية نتائج إيجابية ومعدل عائد داخلي متوقع 19.5%." },
      { date: "2024-05-05", title: "تأمين التمويل المبدئي", description: "تم تأمين التمويل المبدئي للمشروع من خلال شركاء استراتيجيين في قطاع السياحة." }
    ],
    riskAnalysis: {
      marketRisk: { level: "منخفض", description: "نمو متسارع في قطاع السياحة الداخلية" },
      operationalRisk: { level: "متوسط", description: "تحديات تشغيلية نظراً للموقع البعيد نسبياً" },
      financialRisk: { level: "متوسط", description: "ارتفاع حجم الاستثمار المطلوب" },
      regulatoryRisk: { level: "منخفض", description: "دعم حكومي قوي لمشاريع السياحة" }
    }
  }
];

const InvestmentProjectDetails = () => {
  const { id } = useParams();
  const projectId = parseInt(id || "1");
  
  // Find the project by ID, default to first one if not found
  const project = projectsData.find(p => p.id === projectId) || projectsData[0];
  
  // Format currency to Saudi Riyal
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString() + " ريال";
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        {/* Back button and header */}
        <div className="flex items-center justify-between">
          <Link to="/investments/projects">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              <span>العودة للمشاريع</span>
            </Button>
          </Link>
          <Button className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>تصدير البيانات</span>
          </Button>
        </div>
        
        {/* Project header */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">{project.name}</h1>
            <Badge variant={project.status === "قيد التنفيذ" ? "success" : "info"}>
              {project.status}
            </Badge>
          </div>
          <p className="text-muted-foreground">{project.description}</p>
        </div>
        
        {/* Project overview cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-sm text-muted-foreground">إجمالي الاستثمار</p>
                  <p className="text-2xl font-bold">{formatCurrency(project.totalInvestment)}</p>
                </div>
                <Briefcase className="h-8 w-8 text-hrm-blue" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-sm text-muted-foreground">معدل العائد</p>
                  <div className="flex items-center">
                    <p className="text-2xl font-bold">{project.returnRate}%</p>
                    {project.trending === "up" ? (
                      <ArrowUp className="w-5 h-5 text-green-500 mr-1" />
                    ) : (
                      <ArrowDown className="w-5 h-5 text-red-500 mr-1" />
                    )}
                  </div>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-sm text-muted-foreground">نسبة الإنجاز</p>
                  <p className="text-2xl font-bold">{project.progress}%</p>
                </div>
                <BarChart className="h-8 w-8 text-hrm-blue" />
              </div>
              <Progress value={project.progress} className="h-2 mt-4" />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-sm text-muted-foreground">عدد المستثمرين</p>
                  <p className="text-2xl font-bold">{project.investors}</p>
                </div>
                <Users className="h-8 w-8 text-hrm-blue" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Project details tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-4 w-full mb-6">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>نظرة عامة</span>
            </TabsTrigger>
            <TabsTrigger value="investors" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>المستثمرون</span>
            </TabsTrigger>
            <TabsTrigger value="financial" className="flex items-center gap-2">
              <Banknote className="w-4 h-4" />
              <span>البيانات المالية</span>
            </TabsTrigger>
            <TabsTrigger value="analysis" className="flex items-center gap-2">
              <PieChart className="w-4 h-4" />
              <span>تحليل المشروع</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>معلومات المشروع</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-sm text-muted-foreground">الموقع</p>
                        <p className="font-medium">{project.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">مدير المشروع</p>
                        <p className="font-medium">{project.manager}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">القطاع</p>
                        <p className="font-medium">{project.sector}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">تاريخ البدء</p>
                        <p className="font-medium">{project.startDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">تاريخ الانتهاء المتوقع</p>
                        <p className="font-medium">{project.endDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">المساحة الإجمالية</p>
                        <p className="font-medium">{project.totalArea}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">العائد المتوقع</p>
                        <p className="font-medium">{project.expectedROI}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">مستوى المخاطرة</p>
                        <p className="font-medium">{project.riskLevel}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>تحليل المخاطر</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {project.riskAnalysis && (
                      <>
                        <div>
                          <div className="flex justify-between">
                            <p className="text-sm font-medium">مخاطر السوق</p>
                            <Badge variant={project.riskAnalysis.marketRisk.level === "منخفض" ? "success" : 
                                          project.riskAnalysis.marketRisk.level === "متوسط" ? "warning" : "destructive"}>
                              {project.riskAnalysis.marketRisk.level}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{project.riskAnalysis.marketRisk.description}</p>
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <p className="text-sm font-medium">مخاطر التشغيل</p>
                            <Badge variant={project.riskAnalysis.operationalRisk.level === "منخفض" ? "success" : 
                                          project.riskAnalysis.operationalRisk.level === "متوسط" ? "warning" : "destructive"}>
                              {project.riskAnalysis.operationalRisk.level}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{project.riskAnalysis.operationalRisk.description}</p>
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <p className="text-sm font-medium">مخاطر مالية</p>
                            <Badge variant={project.riskAnalysis.financialRisk.level === "منخفض" ? "success" : 
                                          project.riskAnalysis.financialRisk.level === "متوسط" ? "warning" : "destructive"}>
                              {project.riskAnalysis.financialRisk.level}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{project.riskAnalysis.financialRisk.description}</p>
                        </div>
                        <div>
                          <div className="flex justify-between">
                            <p className="text-sm font-medium">مخاطر تنظيمية</p>
                            <Badge variant={project.riskAnalysis.regulatoryRisk.level === "منخفض" ? "success" : 
                                         project.riskAnalysis.regulatoryRisk.level === "متوسط" ? "warning" : "destructive"}>
                              {project.riskAnalysis.regulatoryRisk.level}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{project.riskAnalysis.regulatoryRisk.description}</p>
                        </div>
                      </>
                    )}
                    {!project.riskAnalysis && (
                      <div className="flex items-center justify-center h-40 text-muted-foreground">
                        لا يوجد بيانات لتحليل المخاطر
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>مراحل المشروع</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.milestones.map((milestone, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{milestone.title}</p>
                          <p className="text-sm text-muted-foreground">تاريخ الإتمام: {milestone.completionDate}</p>
                        </div>
                        <Badge variant={
                          milestone.status === "مكتمل" ? "success" : 
                          milestone.status === "قيد التنفيذ" ? "info" : 
                          "outline"
                        }>
                          {milestone.status}
                        </Badge>
                      </div>
                      <div className="mt-2 space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>نسبة الإنجاز:</span>
                          <span>{milestone.progress}%</span>
                        </div>
                        <Progress value={milestone.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>آخر التحديثات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {project.updates.map((update, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex items-baseline justify-between">
                        <p className="font-medium">{update.title}</p>
                        <p className="text-sm text-muted-foreground">{update.date}</p>
                      </div>
                      <p className="text-sm mt-1">{update.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Investors Tab */}
          <TabsContent value="investors" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>المستثمرون في المشروع</CardTitle>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>إضافة مستثمر</span>
                </Button>
              </CardHeader>
              <CardContent>
                <Table className="border">
                  <TableHeader>
                    <TableRow>
                      <TableHead>اسم المستثمر</TableHead>
                      <TableHead>قيمة الاستثمار</TableHead>
                      <TableHead>النسبة من المشروع</TableHead>
                      <TableHead>تاريخ الانضمام</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {project.investorsDetails.map((investor) => (
                      <TableRow key={investor.id}>
                        <TableCell className="font-medium">{investor.name}</TableCell>
                        <TableCell>{formatCurrency(investor.investmentAmount)}</TableCell>
                        <TableCell>{investor.share}</TableCell>
                        <TableCell>{investor.joinDate}</TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">عرض التفاصيل</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between bg-muted/50 border-t p-3">
                <div className="text-sm text-muted-foreground">إجمالي المستثمرين: {project.investorsDetails.length}</div>
                <div className="font-medium">إجمالي الاستثمارات: {formatCurrency(project.totalInvestment)}</div>
              </CardFooter>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>توزيع الحصص</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>توزيع الأرباح المتوقعة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Financial Tab */}
          <TabsContent value="financial" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>العوائد ربع السنوية</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table className="border">
                    <TableHeader>
                      <TableRow>
                        <TableHead>الفترة</TableHead>
                        <TableHead>العائد</TableHead>
                        <TableHead>الحالة</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {project.financialData.quarterlyReturns.map((quarter, index) => (
                        <TableRow key={index}>
                          <TableCell>{quarter.quarter}</TableCell>
                          <TableCell>
                            {quarter.amount > 0 ? formatCurrency(quarter.amount) : "-"}
                          </TableCell>
                          <TableCell>
                            <Badge variant={
                              quarter.status === "نشط" ? "success" : 
                              quarter.status === "أول عائد" ? "info" : 
                              "outline"
                            }>
                              {quarter.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>توزيع النفقات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {project.financialData.expenses.map((expense, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">{expense.category}</span>
                          <span className="text-sm font-medium">{formatCurrency(expense.amount)}</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-hrm-blue" 
                            style={{ width: `${expense.percentage}%` }} 
                          />
                        </div>
                        <div className="flex justify-end mt-1">
                          <span className="text-xs text-muted-foreground">{expense.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>التقارير الشهرية</CardTitle>
              </CardHeader>
              <CardContent>
                <Table className="border">
                  <TableHeader>
                    <TableRow>
                      <TableHead>الشهر</TableHead>
                      <TableHead>نسبة الإنجاز المضافة</TableHead>
                      <TableHead>المصروفات</TableHead>
                      <TableHead>ملاحظات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {project.financialData.monthlyReports.map((report, index) => (
                      <TableRow key={index}>
                        <TableCell>{report.month}</TableCell>
                        <TableCell>{report.completionAdded}</TableCell>
                        <TableCell>{formatCurrency(report.expensesAmount)}</TableCell>
                        <TableCell>{report.notes}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="bg-muted/50 p-3 flex justify-end">
                <Button variant="outline" size="sm">عرض جميع التقارير</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          {/* Analysis Tab */}
          <TabsContent value="analysis" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>تحليل العائد المتوقع</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>مقارنة بالمشاريع المماثلة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">سيتم عرض الرسم البياني هنا</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>مؤشرات الأداء الرئيسية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">معدل العائد الداخلي</p>
                    <p className="text-xl font-bold">14.2%</p>
                    <div className="flex items-center mt-1 text-green-600 text-sm">
                      <ArrowUp className="w-4 h-4 mr-1" />
                      <span>أعلى من المتوقع بنسبة 1.5%</span>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">فترة الاسترداد</p>
                    <p className="text-xl font-bold">5.8 سنوات</p>
                    <div className="flex items-center mt-1 text-green-600 text-sm">
                      <ArrowDown className="w-4 h-4 mr-1" />
                      <span>أقل من المتوقع بـ 0.7 سنة</span>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">صافي القيمة الحالية</p>
                    <p className="text-xl font-bold">{formatCurrency(3200000)}</p>
                    <div className="flex items-center mt-1 text-green-600 text-sm">
                      <ArrowUp className="w-4 h-4 mr-1" />
                      <span>إيجابية ومرتفعة</span>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <p className="text-sm text-muted-foreground">نسبة الربحية</p>
                    <p className="text-xl font-bold">1.28</p>
                    <div className="flex items-center mt-1 text-amber-600 text-sm">
                      <span>ضمن النطاق المتوقع</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>تحليل المخاطر والفرص</CardTitle>
              </CardHeader>
              <CardContent>
                <Table className="border">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">البند</TableHead>
                      <TableHead>التأثير</TableHead>
                      <TableHead>الاحتمالية</TableHead>
                      <TableHead>استراتيجية الاستجابة</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">تغير أسعار مواد البناء</TableCell>
                      <TableCell>
                        <Badge variant="warning">متوسط</Badge>
                      </TableCell>
                      <TableCell>مرتفعة</TableCell>
                      <TableCell>التعاقد المسبق وشراء المواد الرئيسية</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">تأخر في الجدول الزمني</TableCell>
                      <TableCell>
                        <Badge variant="warning">متوسط</Badge>
                      </TableCell>
                      <TableCell>متوسطة</TableCell>
                      <TableCell>تخصيص موارد إضافية وخطة طوارئ</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">ارتفاع الطلب في المنطقة</TableCell>
                      <TableCell>
                        <Badge variant="success">إيجابي</Badge>
                      </TableCell>
                      <TableCell>مرتفعة</TableCell>
                      <TableCell>زيادة الأسعار والعائد المتوقع</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">تغير اللوائح التنظيمية</TableCell>
                      <TableCell>
                        <Badge variant="destructive">مرتفع</Badge>
                      </TableCell>
                      <TableCell>منخفضة</TableCell>
                      <TableCell>متابعة مستمرة للتحديثات التنظيمية</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default InvestmentProjectDetails;

