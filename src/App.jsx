import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { 
  Ship, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Anchor, 
  Truck, 
  FileCheck, 
  Clock, 
  Shield,
  Star,
  Users,
  Award,
  CheckCircle
} from 'lucide-react';

// استيراد الصور
import logoImage from './assets/baraka_ports_logo.png';
import portImage1 from './assets/8re0aXg3K2i4.jpg';
import portImage2 from './assets/aiyXHXwLFDsI.jpg';
import portImage3 from './assets/4MJfoKO3KRIZ.png';
import servicesImage1 from './assets/mQO7xl05eEps.jpg';
import servicesImage2 from './assets/ryRUk5Fm6o7X.webp';
import servicesImage3 from './assets/CVnxPGBbNqXu.jpg';

function App() {
  const branches = [
    { name: 'جدة', description: 'ميناء جدة الإسلامي', icon: Ship },
    { name: 'الحديثة', description: 'منفذ الحديثة الحدودي', icon: Truck },
    { name: 'ينبع', description: 'ميناء ينبع التجاري', icon: Anchor },
    { name: 'نيوم (ضبا)', description: 'ميناء ضبا ونيوم', icon: Globe },
    { name: 'الدرة', description: 'منطقة الدرة التجارية', icon: MapPin }
  ];

  const services = [
    {
      title: 'التخليص الجمركي',
      description: 'خدمات تخليص جمركي سريعة ودقيقة لجميع أنواع البضائع',
      icon: FileCheck,
      image: servicesImage1
    },
    {
      title: 'الخدمات اللوجستية',
      description: 'حلول لوجستية متكاملة للشحن والتوزيع',
      icon: Truck,
      image: servicesImage2
    },
    {
      title: 'استشارات التجارة',
      description: 'استشارات متخصصة في التجارة الدولية والاستيراد والتصدير',
      icon: Users,
      image: servicesImage3
    }
  ];

  const features = [
    { title: 'خبرة واسعة', description: 'سنوات من الخبرة في مجال التخليص الجمركي', icon: Award },
    { title: 'سرعة في الإنجاز', description: 'إنجاز المعاملات في أسرع وقت ممكن', icon: Clock },
    { title: 'موثوقية عالية', description: 'خدمات موثوقة ومضمونة', icon: Shield },
    { title: 'تغطية شاملة', description: 'خدمات في جميع الموانئ والمنافذ الرئيسية', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-background font-arabic">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <img src={logoImage} alt="بركة المواني" className="h-12 w-12" />
              <div>
                <h1 className="text-xl font-bold text-primary">بركة المواني</h1>
                <p className="text-sm text-muted-foreground">للتخليص الجمركي</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6 space-x-reverse">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">الرئيسية</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">خدماتنا</a>
              <a href="#branches" className="text-foreground hover:text-primary transition-colors">الفروع</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">من نحن</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">تواصل معنا</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-right">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                بركة المواني
                <span className="block text-secondary">للتخليص الجمركي</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                شريكك الموثوق في خدمات التخليص الجمركي والخدمات اللوجستية في المملكة العربية السعودية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" variant="secondary" className="text-primary font-semibold" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
                  <Phone className="ml-2 h-5 w-5" />
                  تواصل معنا
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}>
                  <FileCheck className="ml-2 h-5 w-5" />
                  خدماتنا
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={portImage1} 
                alt="ميناء سعودي" 
                className="rounded-lg shadow-2xl animate-float"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-primary p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Star className="h-6 w-6 fill-current" />
                  <span className="font-bold">خدمة متميزة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات المتخصصة في التخليص الجمركي والخدمات اللوجستية
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <service.icon className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">فروعنا</h2>
            <p className="text-xl text-muted-foreground">
              نخدمكم في جميع الموانئ والمنافذ الرئيسية في المملكة
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {branches.map((branch, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="pt-6">
                  <branch.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{branch.name}</h3>
                  <p className="text-sm text-muted-foreground">{branch.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">من نحن</h2>
              <p className="text-lg text-muted-foreground mb-6">
                بركة المواني للتخليص الجمركي هي شركة رائدة في مجال خدمات التخليص الجمركي والخدمات اللوجستية في المملكة العربية السعودية. نتميز بخبرتنا الواسعة وفريقنا المتخصص في تقديم حلول متكاملة لعملائنا.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span>خبرة متميزة في التخليص الجمركي</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span>فريق عمل متخصص ومدرب</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span>خدمة عملاء متميزة على مدار الساعة</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span>تغطية شاملة لجميع الموانئ والمنافذ</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={portImage2} alt="ميناء" className="rounded-lg shadow-lg" />
              <img src={portImage3} alt="ميناء" className="rounded-lg shadow-lg mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-xl text-muted-foreground">
              نحن هنا لخدمتكم، تواصلوا معنا في أي وقت
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center card-hover">
              <CardContent className="pt-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">الهاتف</h3>
                <p className="text-muted-foreground mb-2">ابراهيم عمر: 0543538183</p>
                <p className="text-muted-foreground">رقم المكتب: 0535377798</p>
              </CardContent>
            </Card>
            
            <Card className="text-center card-hover">
              <CardContent className="pt-6">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">البريد الإلكتروني</h3>
                <p className="text-muted-foreground">barakaports@gmail.com</p>
              </CardContent>
            </Card>
            
            <Card className="text-center card-hover">
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">العنوان</h3>
                <p className="text-muted-foreground">المملكة العربية السعودية</p>
                <p className="text-muted-foreground">تبوك - ضبا</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 space-x-reverse mb-4">
                <img src={logoImage} alt="بركة المواني" className="h-10 w-10" />
                <div>
                  <h3 className="font-bold text-lg">بركة المواني</h3>
                  <p className="text-sm text-blue-200">للتخليص الجمركي</p>
                </div>
              </div>
              <p className="text-blue-200">
                شريكك الموثوق في خدمات التخليص الجمركي والخدمات اللوجستية
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">خدماتنا</h4>
              <ul className="space-y-2 text-blue-200">
                <li>التخليص الجمركي</li>
                <li>الخدمات اللوجستية</li>
                <li>استشارات التجارة</li>
                <li>النقل والشحن</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">فروعنا</h4>
              <ul className="space-y-2 text-blue-200">
                <li>جدة</li>
                <li>الحديثة</li>
                <li>ينبع</li>
                <li>نيوم (ضبا)</li>
                <li>الدرة</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">تواصل معنا</h4>
              <div className="space-y-2 text-blue-200">
                <p>ابراهيم عمر: 0543538183</p>
                <p>رقم المكتب: 0535377798</p>
                <p>barakaports@gmail.com</p>
                <p>تبوك - ضبا</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-600 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 بركة المواني للتخليص الجمركي. جميع الحقوق محفوظة. تصميم Ahmed Ali</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
