export type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  desc: string;
  tech?: string;
  language?: string;
  framework?: string;
  database?: string;
  scale?: string;
  tools?: string;
  overview?: string;
  goals?: string[];
  benefits?: string[];
  testimonial?: { quote: string; name: string; role: string; avatar?: string };
  testimonialImage?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Business Intelligence",
    category: "AI IoT",
    image: "/projects/fintech.png",
    desc: "Business Intelligence (BI) của AMZ cho phép doanh nghiệp khai thác dữ liệu từ nhiều nguồn khác nhau về khách hàng, thị trường, nhà cung...",
    tech: "EJB, Servlets, JSP, JNDI, RMI, ROP, JTA, JTS, JMS, JavaMail, JSF, JMS, JCA connector, JDBC, Hibernate, JPA, Spring, Guava, Simin, Liferay portal, jk framework, Vaadin framework",
    language: "Java, Angular",
    framework: "Spring Boot",
    database: "Oracle",
    scale: "+50 chuyên gia",
    tools: "Jira / Git / Confluence",
    overview:
      "Hệ thống Business Intelligence của AMZ giúp doanh nghiệp khai thác và phân tích dữ liệu từ nhiều nguồn khác nhau, cung cấp báo cáo trực quan và hỗ trợ ra quyết định chiến lược dựa trên dữ liệu thực tế.",
    goals: [
      "Tổng hợp dữ liệu từ nhiều hệ thống khác nhau",
      "Cung cấp dashboard phân tích theo thời gian thực",
      "Hỗ trợ dự báo xu hướng kinh doanh bằng AI",
      "Tích hợp với các hệ thống ERP và CRM hiện có",
    ],
    benefits: [
      "Giảm thời gian xử lý báo cáo lên đến 80%",
      "Hỗ trợ ra quyết định nhanh chóng và chính xác",
      "Tích hợp tốt với các hệ thống doanh nghiệp",
    ],
    testimonial: {
      quote:
        "AMZ cung cấp giải pháp vận hành thông suốt, hỗ trợ chúng tôi xử lý các bài toán dữ liệu lớn và phức tạp với tốc độ xử lý mạnh chóng. Đội ngũ của họ luôn tận tâm và hiệu quả.",
      name: "Mr. Trường",
      role: "Managing Director",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: 2,
    title: "Giải pháp AI IoT nhà máy",
    category: "AI IoT",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    desc: "Hệ thống AI IoT tích hợp cảm biến thông minh giúp tối ưu hóa quy trình sản xuất, giảm chi phí vận hành và nâng cao hiệu suất nhà máy...",
    tech: "Python, TensorFlow, MQTT, Node-RED, InfluxDB, Grafana",
    language: "Python, JavaScript",
    framework: "FastAPI, React",
    database: "InfluxDB, PostgreSQL",
    scale: "+30 chuyên gia",
    tools: "Jira / Git / Docker",
    overview:
      "Giải pháp IoT thông minh tích hợp hàng nghìn cảm biến trong nhà máy, thu thập và phân tích dữ liệu theo thời gian thực để tối ưu hóa quy trình sản xuất và dự đoán sự cố thiết bị.",
    goals: [
      "Kết nối và quản lý hàng nghìn thiết bị IoT",
      "Phân tích dữ liệu cảm biến theo thời gian thực",
      "Dự đoán và cảnh báo sự cố thiết bị trước 48h",
      "Tối ưu hóa tiêu thụ năng lượng nhà máy",
    ],
    benefits: [
      "Giảm 35% chi phí bảo trì thiết bị",
      "Tăng 25% hiệu suất sản xuất tổng thể",
      "Tiết kiệm 20% chi phí năng lượng",
    ],
    testimonial: {
      quote:
        "Giải pháp IoT của AMZ đã giúp chúng tôi chuyển đổi hoàn toàn quy trình vận hành nhà máy, từ thủ công sang tự động hóa thông minh.",
      name: "Mr. Minh",
      role: "Factory Director",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
  },
  {
    id: 3,
    title: "Hệ thống giám sát thông minh",
    category: "AI IoT",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    desc: "Giải pháp giám sát thời gian thực với AI phân tích dữ liệu tự động, cảnh báo sớm sự cố và hỗ trợ ra quyết định nhanh chóng...",
    tech: "OpenCV, YOLO, Kafka, Elasticsearch, Kibana",
    language: "Python, TypeScript",
    framework: "Django, Next.js",
    database: "Elasticsearch, Redis",
    scale: "+20 chuyên gia",
    tools: "Git / Kubernetes / Grafana",
    overview:
      "Hệ thống camera AI giám sát an ninh và vận hành 24/7, tự động phát hiện bất thường, nhận diện đối tượng và gửi cảnh báo tức thời đến người quản lý.",
    goals: [
      "Giám sát video AI 24/7 không cần nhân sự",
      "Nhận diện khuôn mặt và phương tiện tự động",
      "Cảnh báo tức thời qua SMS và email",
      "Lưu trữ và truy xuất video thông minh",
    ],
    benefits: [
      "Giảm 60% chi phí nhân sự bảo vệ",
      "Phát hiện sự cố nhanh hơn 10 lần",
      "Độ chính xác nhận diện đạt 98.5%",
    ],
    testimonial: {
      quote:
        "Hệ thống giám sát AI của AMZ đã nâng cao đáng kể mức độ an toàn và bảo mật cho toàn bộ khu vực của chúng tôi.",
      name: "Ms. Lan",
      role: "Security Manager",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
];

// Add remaining projects with same structure - using first 3 as template for all
// Projects 4-21 share same detail structure
const extraProjects: Project[] = [
  {
    id: 4,
    title: "Nền tảng CRM thông minh",
    category: "CRM",
    image: "/projects/saas.png",
    desc: "Nền tảng CRM toàn diện giúp doanh nghiệp quản lý quan hệ khách hàng, tự động hóa quy trình bán hàng và tăng doanh thu hiệu quả...",
    tech: "React, Node.js, GraphQL, Redis, Elasticsearch",
    language: "TypeScript, JavaScript",
    framework: "Next.js, NestJS",
    database: "PostgreSQL, Redis",
    scale: "+25 chuyên gia",
    tools: "Jira / Git / Figma",
    overview:
      "Nền tảng CRM thế hệ mới tích hợp AI giúp tự động hóa toàn bộ quy trình bán hàng, chăm sóc khách hàng và phân tích hành vi người dùng.",
    goals: [
      "Quản lý toàn bộ vòng đời khách hàng",
      "Tự động hóa quy trình bán hàng và marketing",
      "Phân tích hành vi và dự đoán nhu cầu khách hàng",
      "Tích hợp đa kênh liên lạc",
    ],
    benefits: [
      "Tăng 40% tỷ lệ chuyển đổi khách hàng",
      "Giảm 50% thời gian xử lý đơn hàng",
      "Cải thiện 35% mức độ hài lòng khách hàng",
    ],
    testimonial: {
      quote:
        "CRM của AMZ đã thay đổi hoàn toàn cách chúng tôi tương tác với khách hàng, mang lại kết quả kinh doanh vượt trội.",
      name: "Ms. Hương",
      role: "Sales Director",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: 5,
    title: "CRM Bán lẻ đa kênh",
    category: "CRM",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    desc: "Giải pháp CRM tích hợp đa kênh bán lẻ, đồng bộ dữ liệu khách hàng từ online đến offline...",
    tech: "Vue.js, Laravel, MySQL, RabbitMQ",
    language: "PHP, JavaScript",
    framework: "Laravel, Vue.js",
    database: "MySQL, MongoDB",
    scale: "+20 chuyên gia",
    tools: "Git / Docker / Jira",
    overview:
      "Hệ thống CRM đa kênh đồng bộ dữ liệu khách hàng từ website, app mobile, cửa hàng vật lý và mạng xã hội trên một nền tảng duy nhất.",
    goals: [
      "Đồng bộ dữ liệu khách hàng đa kênh",
      "Quản lý chương trình loyalty và tích điểm",
      "Phân tích hành vi mua sắm theo kênh",
      "Cá nhân hóa trải nghiệm khách hàng",
    ],
    benefits: [
      "Tăng 30% doanh thu từ khách hàng cũ",
      "Giảm 45% chi phí marketing",
      "Tăng 25% tần suất mua hàng",
    ],
    testimonial: {
      quote:
        "Giải pháp CRM đa kênh giúp chúng tôi hiểu rõ hơn về khách hàng và tối ưu hóa chiến lược bán hàng hiệu quả.",
      name: "Mr. Đức",
      role: "Retail Manager",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: 6,
    title: "CRM Chăm sóc khách hàng",
    category: "CRM",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
    desc: "Hệ thống chăm sóc khách hàng tự động với AI chatbot, ticket management...",
    tech: "Python, Django, React, WebSocket, Celery",
    language: "Python, TypeScript",
    framework: "Django, React",
    database: "PostgreSQL, Redis",
    scale: "+15 chuyên gia",
    tools: "Git / Slack / Jira",
    overview:
      "Hệ thống CSKH tích hợp AI chatbot 24/7, quản lý ticket thông minh và phân tích sentiment để nâng cao chất lượng dịch vụ.",
    goals: [
      "Tự động hóa 70% yêu cầu hỗ trợ thông thường",
      "Quản lý ticket và SLA hiệu quả",
      "Phân tích cảm xúc khách hàng real-time",
      "Tích hợp đa kênh hỗ trợ",
    ],
    benefits: [
      "Giảm 60% thời gian phản hồi",
      "Tăng 45% mức độ hài lòng khách hàng",
      "Tiết kiệm 40% chi phí nhân sự CSKH",
    ],
    testimonial: {
      quote:
        "AI chatbot của AMZ xử lý hơn 70% yêu cầu tự động, giúp đội ngũ tập trung vào các vấn đề phức tạp hơn.",
      name: "Ms. Thu",
      role: "Customer Service Lead",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: 7,
    title: "Hệ thống quản lý nhân sự",
    category: "Cung cấp nguồn lực",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
    desc: "Phần mềm HRM toàn diện quản lý toàn bộ vòng đời nhân viên...",
    tech: "Angular, Spring Boot, Hibernate, Kafka",
    language: "Java, TypeScript",
    framework: "Spring Boot, Angular",
    database: "Oracle, Redis",
    scale: "+35 chuyên gia",
    tools: "Jira / Git / Confluence",
    overview:
      "Hệ thống HRM toàn diện quản lý từ tuyển dụng, onboarding, đào tạo, đánh giá hiệu suất đến offboarding trên một nền tảng thống nhất.",
    goals: [
      "Số hóa toàn bộ quy trình nhân sự",
      "Tự động hóa tính lương và phúc lợi",
      "Quản lý đào tạo và phát triển nhân viên",
      "Báo cáo nhân sự thời gian thực",
    ],
    benefits: [
      "Giảm 70% thời gian xử lý hành chính nhân sự",
      "Tăng 30% hiệu quả tuyển dụng",
      "Tiết kiệm 50% chi phí quản lý nhân sự",
    ],
    testimonial: {
      quote:
        "HRM của AMZ đã giúp chúng tôi số hóa hoàn toàn quy trình nhân sự, tiết kiệm đáng kể thời gian và chi phí vận hành.",
      name: "Mr. Hùng",
      role: "HR Director",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: 8,
    title: "Nền tảng tuyển dụng trực tuyến",
    category: "Cung cấp nguồn lực",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
    desc: "Hệ thống tuyển dụng thông minh với AI sàng lọc hồ sơ...",
    tech: "React, Node.js, NLP, TensorFlow, AWS S3",
    language: "JavaScript, Python",
    framework: "Express.js, React",
    database: "MongoDB, Elasticsearch",
    scale: "+20 chuyên gia",
    tools: "Git / AWS / Jira",
    overview:
      "Nền tảng tuyển dụng AI tự động sàng lọc hồ sơ, đánh giá ứng viên và quản lý toàn bộ pipeline tuyển dụng từ đăng tin đến onboarding.",
    goals: [
      "AI tự động sàng lọc và xếp hạng hồ sơ",
      "Phỏng vấn video tích hợp và đánh giá AI",
      "Quản lý pipeline ứng viên trực quan",
      "Tích hợp với hệ thống HRM",
    ],
    benefits: [
      "Giảm 80% thời gian sàng lọc hồ sơ",
      "Tăng 50% chất lượng ứng viên được tuyển",
      "Rút ngắn 60% thời gian tuyển dụng",
    ],
    testimonial: {
      quote:
        "Nền tảng tuyển dụng AI giúp chúng tôi tìm được ứng viên phù hợp nhanh hơn và chính xác hơn bao giờ hết.",
      name: "Ms. Ngọc",
      role: "Talent Acquisition Manager",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: 9,
    title: "Phần mềm chấm công thông minh",
    category: "Cung cấp nguồn lực",
    image:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80",
    desc: "Giải pháp chấm công nhận diện khuôn mặt, tích hợp GPS và tự động tính lương...",
    tech: "Python, OpenCV, React Native, Node.js",
    language: "Python, JavaScript",
    framework: "Flask, React Native",
    database: "MySQL, Redis",
    scale: "+15 chuyên gia",
    tools: "Git / Docker / Jira",
    overview:
      "Hệ thống chấm công thông minh sử dụng nhận diện khuôn mặt và GPS, tự động tính toán giờ làm việc, OT và kết nối trực tiếp với hệ thống tính lương.",
    goals: [
      "Chấm công nhận diện khuôn mặt chính xác 99%",
      "Theo dõi vị trí GPS cho nhân viên ngoài văn phòng",
      "Tự động tính lương và phụ cấp",
      "Báo cáo chuyên cần theo thời gian thực",
    ],
    benefits: [
      "Loại bỏ hoàn toàn gian lận chấm công",
      "Tiết kiệm 90% thời gian tính lương",
      "Tăng độ chính xác tính lương lên 99.9%",
    ],
    testimonial: {
      quote:
        "Hệ thống chấm công AI đã giải quyết hoàn toàn vấn đề gian lận và sai sót trong tính lương của chúng tôi.",
      name: "Mr. Bình",
      role: "Operations Manager",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
];

projects.push(...extraProjects);

const moreProjects: Project[] = [
  {
    id: 10,
    title: "Hệ thống Quản lý Doanh nghiệp",
    category: "ERP",
    image: "/projects/ecommerce.png",
    desc: "Giải pháp ERP tổng thể tích hợp tài chính, kho vận, sản xuất và nhân sự...",
    tech: "Java EE, Angular, Oracle DB, JBoss",
    language: "Java, TypeScript",
    framework: "Spring Boot, Angular",
    database: "Oracle",
    scale: "+50 chuyên gia",
    tools: "Jira / Git / Confluence",
    overview:
      "Hệ thống ERP toàn diện tích hợp tất cả các phòng ban doanh nghiệp trên một nền tảng duy nhất, từ tài chính, kho vận đến sản xuất và nhân sự.",
    goals: [
      "Tích hợp toàn bộ quy trình doanh nghiệp",
      "Tự động hóa báo cáo tài chính",
      "Quản lý chuỗi cung ứng end-to-end",
      "Hỗ trợ ra quyết định dựa trên dữ liệu",
    ],
    benefits: [
      "Giảm 40% chi phí vận hành",
      "Tăng 35% hiệu quả quản lý kho",
      "Rút ngắn 60% thời gian lập báo cáo",
    ],
    testimonial: {
      quote:
        "ERP của AMZ đã giúp chúng tôi có cái nhìn toàn diện về hoạt động doanh nghiệp và ra quyết định nhanh hơn.",
      name: "Mr. Thành",
      role: "CEO",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: 11,
    title: "ERP Sản xuất & Kho vận",
    category: "ERP",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    desc: "Module ERP chuyên biệt cho sản xuất và logistics...",
    tech: "SAP ABAP, Java, React, PostgreSQL",
    language: "Java, JavaScript",
    framework: "Spring, React",
    database: "PostgreSQL, SAP HANA",
    scale: "+40 chuyên gia",
    tools: "SAP / Git / Jira",
    overview:
      "Module ERP chuyên biệt cho ngành sản xuất và logistics, quản lý toàn bộ chuỗi cung ứng từ nguyên liệu đầu vào đến sản phẩm đầu ra.",
    goals: [
      "Quản lý kế hoạch sản xuất MRP/MPS",
      "Theo dõi tồn kho real-time đa kho",
      "Tối ưu hóa lộ trình vận chuyển",
      "Quản lý chất lượng sản phẩm QC",
    ],
    benefits: [
      "Giảm 30% tồn kho dư thừa",
      "Tăng 25% hiệu suất dây chuyền sản xuất",
      "Giảm 20% chi phí vận chuyển",
    ],
    testimonial: {
      quote:
        "Module ERP sản xuất giúp chúng tôi kiểm soát toàn bộ quy trình từ nguyên liệu đến thành phẩm một cách chính xác.",
      name: "Mr. Quang",
      role: "Production Manager",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: 12,
    title: "ERP Tài chính kế toán",
    category: "ERP",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    desc: "Hệ thống kế toán tài chính tự động hóa báo cáo...",
    tech: "Java, Angular, Oracle, Jasper Reports",
    language: "Java, TypeScript",
    framework: "Spring Boot, Angular",
    database: "Oracle, PostgreSQL",
    scale: "+30 chuyên gia",
    tools: "Jira / Git / Confluence",
    overview:
      "Hệ thống kế toán tài chính tự động hóa toàn bộ quy trình từ nhập liệu, xử lý đến lập báo cáo tài chính theo chuẩn VAS và IFRS.",
    goals: [
      "Tự động hóa bút toán kế toán",
      "Lập báo cáo tài chính theo VAS/IFRS",
      "Quản lý ngân sách và dự báo tài chính",
      "Kiểm soát nội bộ và audit trail",
    ],
    benefits: [
      "Giảm 80% thời gian lập báo cáo tài chính",
      "Tăng độ chính xác lên 99.99%",
      "Tuân thủ 100% chuẩn mực kế toán",
    ],
    testimonial: {
      quote:
        "Hệ thống kế toán của AMZ đã giúp chúng tôi đóng sổ tháng chỉ trong 2 ngày thay vì 2 tuần như trước.",
      name: "Ms. Phương",
      role: "CFO",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: 13,
    title: "Cổng thanh toán trực tuyến",
    category: "Thương mại điện tử",
    image: "/projects/smarthome.png",
    desc: "Cổng thanh toán đa phương thức hỗ trợ thẻ ngân hàng, ví điện tử và QR code...",
    tech: "Java, Spring Security, HSM, PCI DSS",
    language: "Java, JavaScript",
    framework: "Spring Boot, React",
    database: "Oracle, Redis",
    scale: "+40 chuyên gia",
    tools: "Jira / Git / Confluence",
    overview:
      "Cổng thanh toán bảo mật cao hỗ trợ đa phương thức thanh toán, xử lý hàng triệu giao dịch mỗi ngày với độ tin cậy 99.99%.",
    goals: [
      "Hỗ trợ đa phương thức thanh toán",
      "Bảo mật chuẩn PCI DSS Level 1",
      "Xử lý giao dịch tốc độ cao <100ms",
      "Tích hợp với 50+ ngân hàng và ví điện tử",
    ],
    benefits: [
      "Tỷ lệ thành công giao dịch 99.5%",
      "Giảm 70% tỷ lệ gian lận thanh toán",
      "Xử lý 10,000 giao dịch/giây",
    ],
    testimonial: {
      quote:
        "Cổng thanh toán của AMZ đã giúp chúng tôi mở rộng phương thức thanh toán và tăng tỷ lệ hoàn thành đơn hàng đáng kể.",
      name: "Mr. Long",
      role: "CTO",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: 14,
    title: "Sàn thương mại điện tử B2B",
    category: "Thương mại điện tử",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
    desc: "Nền tảng B2B marketplace kết nối doanh nghiệp với nhà cung cấp...",
    tech: "React, Node.js, Elasticsearch, Redis, AWS",
    language: "TypeScript, JavaScript",
    framework: "Next.js, Express",
    database: "PostgreSQL, Elasticsearch",
    scale: "+35 chuyên gia",
    tools: "AWS / Git / Jira",
    overview:
      "Sàn B2B marketplace kết nối hàng nghìn doanh nghiệp với nhà cung cấp, tự động hóa quy trình đặt hàng, đàm phán giá và thanh toán.",
    goals: [
      "Kết nối doanh nghiệp và nhà cung cấp",
      "Tự động hóa quy trình mua hàng B2B",
      "Quản lý hợp đồng và thanh toán",
      "Phân tích xu hướng thị trường",
    ],
    benefits: [
      "Giảm 40% chi phí mua hàng",
      "Rút ngắn 60% chu kỳ mua hàng",
      "Tăng 50% số lượng nhà cung cấp",
    ],
    testimonial: {
      quote:
        "Sàn B2B của AMZ đã kết nối chúng tôi với hàng trăm nhà cung cấp uy tín, tối ưu hóa chi phí mua hàng đáng kể.",
      name: "Ms. Linh",
      role: "Procurement Director",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: 15,
    title: "Ứng dụng mua sắm di động",
    category: "Thương mại điện tử",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    desc: "App mua sắm mobile với giao diện trực quan, gợi ý sản phẩm AI...",
    tech: "React Native, Node.js, TensorFlow Lite, Firebase",
    language: "TypeScript, JavaScript",
    framework: "React Native, Express",
    database: "MongoDB, Firebase",
    scale: "+25 chuyên gia",
    tools: "Git / Firebase / Jira",
    overview:
      "Ứng dụng mua sắm mobile thế hệ mới với AI gợi ý sản phẩm cá nhân hóa, AR thử sản phẩm và thanh toán 1-click.",
    goals: [
      "Gợi ý sản phẩm AI cá nhân hóa",
      "AR thử sản phẩm trước khi mua",
      "Thanh toán 1-click an toàn",
      "Chương trình loyalty thông minh",
    ],
    benefits: [
      "Tăng 55% tỷ lệ chuyển đổi",
      "Tăng 40% giá trị đơn hàng trung bình",
      "Giảm 30% tỷ lệ bỏ giỏ hàng",
    ],
    testimonial: {
      quote:
        "App mua sắm của AMZ đã mang lại trải nghiệm mua sắm tuyệt vời cho khách hàng, tăng doanh thu mobile lên 3 lần.",
      name: "Mr. Khoa",
      role: "E-commerce Director",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: 16,
    title: "Phần mềm văn phòng số",
    category: "Văn phòng hỗ trợ",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    desc: "Bộ công cụ văn phòng số tích hợp soạn thảo, bảng tính, trình chiếu...",
    tech: "React, WebRTC, WebSocket, Node.js, AWS",
    language: "TypeScript, JavaScript",
    framework: "React, Express",
    database: "PostgreSQL, S3",
    scale: "+20 chuyên gia",
    tools: "AWS / Git / Jira",
    overview:
      "Bộ công cụ văn phòng số toàn diện cho phép cộng tác thời gian thực, quản lý tài liệu và họp trực tuyến trên một nền tảng duy nhất.",
    goals: [
      "Cộng tác tài liệu thời gian thực",
      "Quản lý và chia sẻ tài liệu an toàn",
      "Tích hợp lịch và quản lý công việc",
      "Họp video HD tích hợp",
    ],
    benefits: [
      "Tăng 50% năng suất làm việc nhóm",
      "Giảm 60% email nội bộ",
      "Tiết kiệm 40% chi phí phần mềm văn phòng",
    ],
    testimonial: {
      quote:
        "Bộ công cụ văn phòng số của AMZ đã giúp đội ngũ chúng tôi cộng tác hiệu quả hơn, đặc biệt trong môi trường làm việc từ xa.",
      name: "Ms. Mai",
      role: "Operations Director",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: 17,
    title: "Hệ thống quản lý tài liệu",
    category: "Văn phòng hỗ trợ",
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80",
    desc: "DMS thông minh với OCR nhận dạng văn bản, phân loại tự động...",
    tech: "Python, Tesseract OCR, Elasticsearch, React",
    language: "Python, TypeScript",
    framework: "FastAPI, React",
    database: "Elasticsearch, MinIO",
    scale: "+15 chuyên gia",
    tools: "Git / Docker / Jira",
    overview:
      "Hệ thống quản lý tài liệu thông minh với OCR tự động nhận dạng và phân loại tài liệu, tìm kiếm full-text và kiểm soát phiên bản.",
    goals: [
      "OCR tự động nhận dạng tài liệu",
      "Phân loại và gắn tag tài liệu tự động",
      "Tìm kiếm full-text thông minh",
      "Kiểm soát phiên bản và audit trail",
    ],
    benefits: [
      "Giảm 90% thời gian tìm kiếm tài liệu",
      "Tiết kiệm 70% không gian lưu trữ vật lý",
      "Tăng bảo mật tài liệu lên 100%",
    ],
    testimonial: {
      quote:
        "DMS của AMZ đã giúp chúng tôi số hóa hoàn toàn kho tài liệu và tìm kiếm thông tin chỉ trong vài giây.",
      name: "Mr. Tùng",
      role: "Document Manager",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: 18,
    title: "Nền tảng họp trực tuyến",
    category: "Văn phòng hỗ trợ",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80",
    desc: "Giải pháp họp video HD, chia sẻ màn hình, whiteboard ảo...",
    tech: "WebRTC, Mediasoup, React, Node.js, Redis",
    language: "TypeScript, JavaScript",
    framework: "React, Express",
    database: "Redis, PostgreSQL",
    scale: "+20 chuyên gia",
    tools: "Git / AWS / Jira",
    overview:
      "Nền tảng họp trực tuyến enterprise với video HD, whiteboard ảo, ghi âm tự động và tích hợp AI tóm tắt nội dung cuộc họp.",
    goals: [
      "Họp video HD lên đến 1000 người",
      "Whiteboard ảo cộng tác thời gian thực",
      "Ghi âm và tóm tắt AI tự động",
      "Tích hợp lịch và quản lý phòng họp",
    ],
    benefits: [
      "Giảm 50% chi phí đi lại công tác",
      "Tăng 40% hiệu quả cuộc họp",
      "Tiết kiệm 30% thời gian họp",
    ],
    testimonial: {
      quote:
        "Nền tảng họp của AMZ đã giúp chúng tôi kết nối đội ngũ toàn cầu hiệu quả, tiết kiệm đáng kể chi phí đi lại.",
      name: "Ms. Hà",
      role: "Global Operations Manager",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: 19,
    title: "Core Banking",
    category: "Viễn thông",
    image: "/projects/fintech.png",
    desc: "Hệ thống Core Banking thế hệ mới xử lý giao dịch tốc độ cao...",
    tech: "Java EE, Oracle DB, IBM MQ, Spring Batch",
    language: "Java, COBOL",
    framework: "Spring Boot, Hibernate",
    database: "Oracle RAC, DB2",
    scale: "+60 chuyên gia",
    tools: "Jira / Git / Confluence",
    overview:
      "Hệ thống Core Banking thế hệ mới hỗ trợ đầy đủ nghiệp vụ ngân hàng, xử lý hàng triệu giao dịch mỗi ngày với độ tin cậy và bảo mật cao nhất.",
    goals: [
      "Xử lý giao dịch real-time 24/7",
      "Hỗ trợ đầy đủ nghiệp vụ ngân hàng",
      "Tích hợp open banking API",
      "Tuân thủ Basel III và các quy định NHNN",
    ],
    benefits: [
      "Xử lý 5 triệu giao dịch/ngày",
      "Uptime 99.999% (5 nines)",
      "Giảm 50% chi phí vận hành hệ thống",
    ],
    testimonial: {
      quote:
        "Core Banking của AMZ đã giúp ngân hàng chúng tôi chuyển đổi số thành công, nâng cao trải nghiệm khách hàng vượt trội.",
      name: "Mr. Việt",
      role: "CIO - Banking",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  },
  {
    id: 20,
    title: "Hệ thống Viễn thông 5G",
    category: "Viễn thông",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    desc: "Giải pháp hạ tầng viễn thông 5G toàn diện...",
    tech: "C++, Python, OpenRAN, Kubernetes, Prometheus",
    language: "C++, Python, Go",
    framework: "OpenRAN, Kubernetes",
    database: "InfluxDB, Cassandra",
    scale: "+45 chuyên gia",
    tools: "Git / Kubernetes / Grafana",
    overview:
      "Giải pháp hạ tầng 5G toàn diện từ core network đến RAN, hỗ trợ network slicing, edge computing và quản lý mạng thông minh bằng AI.",
    goals: [
      "Triển khai mạng 5G SA/NSA",
      "Network slicing cho các use case khác nhau",
      "Edge computing giảm độ trễ",
      "AI tối ưu hóa mạng tự động",
    ],
    benefits: [
      "Tốc độ mạng tăng 100 lần so với 4G",
      "Độ trễ giảm xuống dưới 1ms",
      "Tiết kiệm 40% chi phí vận hành mạng",
    ],
    testimonial: {
      quote:
        "Giải pháp 5G của AMZ đã giúp chúng tôi triển khai mạng thế hệ mới nhanh chóng và hiệu quả.",
      name: "Mr. Nam",
      role: "Network Director",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    id: 21,
    title: "Nền tảng OTT & Streaming",
    category: "Viễn thông",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    desc: "Hệ thống OTT streaming video chất lượng 4K, CDN phân tán toàn cầu...",
    tech: "FFmpeg, HLS, DASH, React, Node.js, CDN",
    language: "JavaScript, Go, Python",
    framework: "React, Gin, FastAPI",
    database: "PostgreSQL, Redis, S3",
    scale: "+30 chuyên gia",
    tools: "AWS / Git / Jira",
    overview:
      "Nền tảng OTT streaming video 4K với CDN toàn cầu, DRM bảo vệ bản quyền, adaptive bitrate và phân tích hành vi người xem real-time.",
    goals: [
      "Streaming video 4K/8K adaptive bitrate",
      "CDN phân tán toàn cầu <50ms",
      "DRM bảo vệ nội dung bản quyền",
      "Phân tích hành vi người xem AI",
    ],
    benefits: [
      "Hỗ trợ 10 triệu người xem đồng thời",
      "Giảm 60% chi phí băng thông",
      "Tăng 45% thời gian xem trung bình",
    ],
    testimonial: {
      quote:
        "Nền tảng OTT của AMZ đã giúp chúng tôi cung cấp trải nghiệm xem video chất lượng cao cho hàng triệu người dùng.",
      name: "Ms. Trang",
      role: "Product Director",
    },
    testimonialImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
];

projects.push(...moreProjects);

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}
