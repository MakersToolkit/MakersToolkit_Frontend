
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { Cpu, Wifi, Bot, ArrowLeft, Check, ShoppingCart } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from '@/components/ui/card';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || "0");
  
  // 제품 데이터 - 실제 앱에서는 API나 데이터베이스에서 가져옴
  const products = [
    {
      id: 1,
      name: "아두이노 스타터 키트",
      category: "입문자용",
      level: "초급",
      price: "89,000원",
      description: "임베디드 시스템의 기초를 배우기 위한 완벽한 키트입니다. 아두이노 보드, 브레드보드, 다양한 센서와 액츄에이터, 그리고 상세한 학습 가이드가 포함되어 있습니다.",
      longDescription: "아두이노 스타터 키트는 전자 공학과 프로그래밍에 처음 입문하는 학생과, 취미로 전자 공학을 시작하려는 사람들을 위해 설계되었습니다. 이 키트에는 여러 프로젝트를 구축하고 실험할 수 있는 모든 구성 요소와 상세한 안내서가 포함되어 있습니다. LED 깜빡이기부터 서보 모터 제어, 온도 센서를 이용한 환경 모니터링까지 15개의 단계별 프로젝트를 통해 아두이노 프로그래밍과 전자 회로에 대한 기초 지식을 습득할 수 있습니다. 누구나 쉽게 따라할 수 있는 한글 매뉴얼과 초보자를 위한 온라인 커뮤니티 지원으로 혼자서도 충분히 학습할 수 있습니다.",
      features: [
        "Arduino UNO R3 보드",
        "다양한 LED, 버튼, 저항",
        "온도, 습도, 초음파 센서",
        "모터 및 서보 모터",
        "상세한 한글 매뉴얼",
        "단계별 15개 프로젝트 가이드"
      ],
      specifications: [
        "교육 대상: 중학생 이상",
        "난이도: 초급",
        "소요 시간: 프로젝트당 1-3시간",
        "언어: C/C++",
        "패키지 크기: 30 x 20 x 5 cm",
        "무게: 600g"
      ],
      icon: <Cpu className="w-8 h-8" />,
      imageBg: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "IoT 학습 패키지",
      category: "중급자용",
      level: "중급",
      price: "129,000원",
      description: "사물인터넷의 원리와 응용을 배울 수 있는 종합 패키지입니다. WiFi 모듈, 다양한 센서, 클라우드 연동 기능을 포함하고 있으며 실제 IoT 프로젝트를 구현할 수 있습니다.",
      longDescription: "IoT 학습 패키지는 인터넷 연결 장치를 설계하고 개발하는 실질적인 경험을 제공합니다. 이 패키지를 통해 센서 데이터를 수집하고, 클라우드에 전송하며, 모바일 앱에서 원격으로 장치를 제어하는 방법을 배울 수 있습니다. ESP8266 WiFi 모듈, OLED 디스플레이, 다양한 환경 센서를 활용하여 실내 환경 모니터링 시스템, 스마트 홈 제어 장치, 웨어러블 건강 추적기 등 실용적인 IoT 프로젝트를 구현할 수 있습니다. 입문용 아두이노 경험을 이미 가진 학생들이나 IoT 기술을 심도 있게 배우고 싶은 중급자에게 적합합니다.",
      features: [
        "ESP8266 WiFi 모듈",
        "다양한 환경 센서",
        "OLED 디스플레이",
        "클라우드 서비스 연동 가이드",
        "모바일 앱 연동 튜토리얼",
        "10개의 IoT 프로젝트 예제"
      ],
      specifications: [
        "교육 대상: 고등학생 이상",
        "난이도: 중급",
        "소요 시간: 프로젝트당 2-5시간",
        "언어: C++, JavaScript",
        "패키지 크기: 35 x 25 x 8 cm",
        "무게: 850g"
      ],
      icon: <Wifi className="w-8 h-8" />,
      imageBg: "bg-gradient-to-br from-teal-500 to-green-600"
    },
    {
      id: 3,
      name: "로보틱스 프로젝트 키트",
      category: "고급자용",
      level: "고급",
      price: "159,000원",
      description: "움직이는 로봇을 직접 설계하고 제작할 수 있는 종합 키트입니다. 모터 제어, 센서 통합, 자율 주행 알고리즘 등 로보틱스의 핵심 개념을 학습할 수 있습니다.",
      longDescription: "로보틱스 프로젝트 키트는 실제 로봇 공학 원리를 적용하여 자율 주행 로봇을 설계하고 구축할 수 있는 고급 학습 패키지입니다. 이 키트는 DC 모터, 스텝 모터, 서보 모터, 각종 센서, 로봇 프레임 및 바퀴 등 완전한 로봇 시스템을 구축하는 데 필요한 모든 하드웨어 구성 요소를 포함하고 있습니다. 장애물 감지 및 회피, 라인 트레이싱, 맵핑, 자율 주행 등의 알고리즘을 구현하며 실제 로봇 공학의 핵심 개념을 배울 수 있습니다. 기본적인 프로그래밍과 전자 회로에 대한 이해가 있는 고급 학습자에게 적합하며, 로봇 공학 분야로 진출하고자 하는 학생들에게 실질적인 경험을 제공합니다.",
      features: [
        "DC 모터 및 스텝 모터",
        "모터 드라이버",
        "다축 서보 모터",
        "적외선 및 초음파 센서",
        "로봇 프레임 및 바퀴",
        "자율주행 알고리즘 튜토리얼"
      ],
      specifications: [
        "교육 대상: 대학생 이상",
        "난이도: 고급",
        "소요 시간: 프로젝트당 5-10시간",
        "언어: C++, Python",
        "패키지 크기: 40 x 30 x 15 cm",
        "무게: 1200g"
      ],
      icon: <Bot className="w-8 h-8" />,
      imageBg: "bg-gradient-to-br from-orange-500 to-red-600"
    }
  ];
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="relative min-h-screen overflow-x-hidden">
        <StarField />
        <Navbar />
        <main className="pt-24 pb-16 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">제품을 찾을 수 없습니다</h1>
          <Button asChild>
            <Link to="/products">제품 목록으로 돌아가기</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />
      <Navbar />
      
      <main className="pt-24 pb-16 container mx-auto px-4">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">홈</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">제품</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className={`${product.imageBg} h-64 md:h-96 rounded-lg mb-8 relative flex items-center justify-center`}>
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center z-10">
                {React.cloneElement(product.icon, { className: "w-10 h-10" })}
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">{product.level}</span>
              <span className="text-cosmic-stardust-teal">{product.category}</span>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">제품 설명</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">{product.longDescription}</p>
              
              <h3 className="font-semibold mb-3">구성품:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-cosmic-stardust-teal shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="font-semibold mb-3">사양:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cosmic-stardust-teal" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-2">{product.price}</h2>
              <p className="text-gray-300 mb-6">배송비 포함 가격</p>
              
              <div className="space-y-4 mb-8">
                <Button className="w-full bg-cosmic-stardust-teal hover:bg-cosmic-stardust-teal/90">
                  <ShoppingCart className="mr-2" /> 구매하기
                </Button>
                <Button variant="outline" className="w-full">
                  문의하기
                </Button>
              </div>
              
              <div className="border border-white/10 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-cosmic-stardust-teal" />
                  <p>3-5일 내 배송</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-cosmic-stardust-teal" />
                  <p>1년 기술 지원</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-cosmic-stardust-teal" />
                  <p>무상 교체 보증 90일</p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-cosmic-stardust-teal" />
                  <p>학교 및 단체 할인 가능</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8">
          <h2 className="text-2xl font-bold mb-6">추천 제품</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter(p => p.id !== productId)
              .map(relatedProduct => (
                <Card key={relatedProduct.id} className="overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm transition-transform hover:scale-105">
                  <div className={`h-40 ${relatedProduct.imageBg}`}></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-300 mb-4">{relatedProduct.description.substring(0, 100)}...</p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/products/${relatedProduct.id}`}>자세히 보기</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
