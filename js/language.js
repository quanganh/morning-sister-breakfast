// Language switching functionality for The Morning Sister Breakfast website
// Supports English (EN) and Vietnamese (VN)

const LANGUAGE_DATA = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-dishes': 'Our Dishes',
        'nav-contact': 'Contact',

        // Hero Section
        'hero-title': 'THE MORNING SISTER BREAKFAST',
        'hero-subtitle': 'Authentic Vietnamese Morning Cuisine',
        'hero-description': 'Start your day with the rich, aromatic flavors of Vietnam. Our 5 signature breakfast dishes, prepared with love and authentic recipes, will transport you to the bustling streets of Hoi An City every morning.',
        'btn-explore-menu': 'Explore Our Menu',
        'btn-visit-today': 'Visit Us Today',
        'feature-open-daily': 'Open Daily 8:00 AM',
        'feature-fresh-ingredients': 'Fresh Local Ingredients',
        'feature-made-with-love': 'Made with Love',
        'overlay-text': 'Authentic Vietnamese Recipes',

        // Featured Dishes
        'featured-dishes-title': 'Our Signature Morning Dishes',
        'featured-dishes-subtitle': 'Discover the authentic flavors that make Vietnamese breakfast a unique culinary experience',
        'pho-bo-title': 'Pho Bo (Beef Pho)',
        'pho-bo-desc': 'Our signature pho features rice noodles in aromatic beef broth with tender beef slices and fresh herbs. A comforting and traditional start to any Vietnamese morning.',
        'bo-ne-title': 'Bo Ne (Sizzling Beef)',
        'bo-ne-desc': 'Our most popular dish! Sizzling beef steak with eggs served in a hot skillet with fresh herbs, vegetables, and crispy baguette. The aroma and sound will wake up your senses perfectly.',
        'bo-kho-title': 'Bo Kho (Braised Beef)',
        'bo-kho-desc': 'Tender braised beef in aromatic spices with carrots and potatoes, served with fresh herbs and rice. A hearty and flavorful Vietnamese breakfast that will keep you energized throughout the day.',
        'tag-traditional': 'Traditional',
        'tag-fresh': 'Fresh',
        'tag-popular': 'Popular',
        'tag-sizzling': 'Sizzling',
        'tag-hearty': 'Hearty',
        'tag-aromatic': 'Aromatic',

        // Vietnamese Culture Section
        'culture-title': 'Vietnamese Breakfast Culture',
        'culture-desc-1': 'In Vietnam, breakfast is more than just a meal—it\'s a celebration of community, tradition, and the start of a new day. Our morning cuisine reflects the country\'s rich culinary heritage, combining fresh local ingredients with time-honored cooking techniques.',
        'culture-desc-2': 'From the bustling streets of Hoi An City to the peaceful countryside, Vietnamese breakfast brings people together over steaming bowls of pho, sizzling skillets of bo ne, hearty braised beef, and other traditional morning delights.',
        'culture-feature-1-title': 'Early Morning Tradition',
        'culture-feature-1-desc': 'Vietnamese people start their day early, often gathering at local eateries for breakfast before work or school.',
        'culture-feature-2-title': 'Community Gathering',
        'culture-feature-2-desc': 'Breakfast is a social affair, where friends and family come together to share food and conversation.',
        'culture-feature-3-title': 'Fresh & Local',
        'culture-feature-3-desc': 'We use only the freshest local ingredients, supporting local farmers and ensuring authentic flavors.',

        // Call to Action
        'cta-title': 'Experience Vietnamese Breakfast Today',
        'cta-desc': 'Join us every morning to discover the authentic flavors of Vietnam. From traditional pho to sizzling bo ne and hearty braised beef, every dish tells a story of our rich culinary heritage.',
        'btn-view-menu': 'View Full Menu',
        'btn-visit-now': 'Visit Us Now',

        // Footer
        'footer-tagline': 'Authentic Vietnamese Breakfast',
        'footer-quick-links': 'Quick Links',
        'footer-contact-info': 'Contact Info',
        'footer-opening-hours': 'Opening Hours',
        'footer-hours': 'Mon-Sun: 8:00 AM - 17:00 PM',
        'footer-copyright': '© 2024 - 2025 The Morning Sister Breakfast. Authentic Vietnamese Cuisine. All rights reserved.',

        // Dishes Page
        'dishes-page-title': 'Our Signature Dishes',
        'dishes-page-subtitle': 'Experience the authentic taste of Vietnam with our signature morning dishes',
        'tab-main-dishes': 'Main Dishes',
        'tab-specialties': 'Specialties',
        'tab-beverages': 'Beverages',
        'pho-bo-detail-desc': 'Our signature pho is made with ancient Vietnamese techniques, using rice noodles, aromatic beef broth, tender beef slices, and fresh herbs. Each bowl is prepared with care, resulting in a comforting and flavorful morning meal that warms the soul.',
        'pho-bo-fresh-daily': 'Fresh daily at 8:00 AM',
        'pho-bo-herbs': 'Fresh herbs & vegetables',
        'pho-bo-slow-cooked': 'Slow-cooked broth',
        'pho-bo-tag-comforting': 'Comforting',
        'bo-ne-detail-desc': 'Our most popular dish! Sizzling beef steak with eggs, served in a hot skillet with fresh herbs, vegetables, and a crispy baguette. The sizzling sound and aroma will wake up your senses and start your morning perfectly.',
        'bo-ne-weekend-special': 'Weekend special',
        'bo-ne-premium-beef': 'Premium beef cuts',
        'bo-ne-chef-recommendation': 'Chef\'s recommendation',
        'bo-ne-tag-premium': 'Premium',
        'bo-kho-detail-desc': 'Tender braised beef in aromatic spices with carrots and potatoes, served with fresh herbs and rice. This hearty dish represents the rich flavors of Vietnamese home cooking, perfect for a satisfying breakfast.',
        'bo-kho-slow-cooked-daily': 'Slow-cooked daily',
        'bo-kho-local-vegetables': 'Fresh local vegetables',
        'bo-kho-traditional-recipe': 'Traditional recipe',
        'bo-kho-tag-traditional': 'Traditional',
        'op-la-title': 'Op La Xiu Mai (Omelette with Meatballs)',
        'op-la-desc': 'A delightful Vietnamese omelette filled with savory meatballs, fresh herbs, and vegetables. This dish combines the comfort of eggs with the rich flavors of Vietnamese meatballs, creating a perfect breakfast experience.',
        'op-la-made-to-order': 'Made to order',
        'op-la-fresh-herbs': 'Fresh herbs & vegetables',
        'op-la-unique-combination': 'Unique combination',
        'op-la-tag-unique': 'Unique',
        'op-la-tag-savory': 'Savory',
        'banh-mi-title': 'Banh Mi Xiu Mai (Baguette with Meatballs)',
        'banh-mi-desc': 'Crispy Vietnamese baguette filled with flavorful meatballs, fresh vegetables, cilantro, and our special sauce. This twist on the classic banh mi offers a unique and satisfying breakfast option.',
        'banh-mi-available-all-day': 'Available all day',
        'banh-mi-fresh-vegetables': 'Fresh vegetables',
        'banh-mi-innovative-twist': 'Innovative twist',
        'banh-mi-tag-innovative': 'Innovative',
        'banh-mi-tag-satisfying': 'Satisfying',
        'coffee-title': 'Vietnamese Coffee',
        'coffee-desc': 'Strong Vietnamese coffee served with sweetened condensed milk, creating the perfect balance of bold and sweet. Served hot or iced, it\'s the perfect accompaniment to any Vietnamese breakfast.',
        'coffee-brewed-fresh': 'Brewed fresh',
        'coffee-traditional-method': 'Traditional method',
        'coffee-perfect-pairing': 'Perfect pairing',
        'coffee-tag-strong': 'Strong',
        'coffee-tag-sweet': 'Sweet',
        'tea-title': 'Fresh Herbal Tea',
        'tea-desc': 'Refreshing herbal tea made with fresh local herbs and flowers. A light and aromatic beverage that perfectly complements our Vietnamese breakfast dishes and aids digestion.',
        'tea-brewed-to-order': 'Brewed to order',
        'tea-local-herbs': 'Local herbs',
        'tea-health-benefits': 'Health benefits',
        'tea-tag-refreshing': 'Refreshing',
        'tea-tag-healthy': 'Healthy',
        'tea-tag-local': 'Local',
        'dishes-cta-title': 'Ready to Experience Vietnamese Breakfast?',
        'dishes-cta-desc': 'Visit us to taste our 5 signature dishes and discover the rich flavors of Vietnam',
        'btn-visit-today': 'Visit Us Today',
        'btn-get-in-touch': 'Get in Touch',

        // Contact Page
        'contact-page-title': 'Contact Us',
        'contact-page-subtitle': 'Visit us for an authentic Vietnamese breakfast experience with our signature dishes or get in touch for catering and special events',
        'contact-visit-location': 'Visit Our Location',
        'contact-address': '111 Nguyen Phan Vinh<br>Cam An, Hoi An<br>Quang Nam 51300, Vietnam',
        'contact-opening-hours': 'Opening Hours',
        'contact-hours': '<strong>Monday - Sunday:</strong><br>8:00 AM - 17:00 PM',
        'contact-call-us': 'Call Us',
        'contact-mobile': '<strong>Mobile:</strong><br>+84 39 366 70 97',
        'contact-email-us': 'Email Us',
        'contact-general': '<strong>General:</strong><br>themorningsisterbreakfast@gmail.com',
        'contact-send-message': 'Send Us a Message',
        'contact-form-name': 'Full Name *',
        'contact-form-email': 'Email Address *',
        'contact-form-phone': 'Phone Number',
        'contact-form-subject': 'Subject *',
        'contact-form-subject-placeholder': 'Select a subject',
        'contact-form-subject-general': 'General Inquiry',
        'contact-form-subject-reservation': 'Table Reservation',
        'contact-form-subject-catering': 'Catering Services',
        'contact-form-subject-events': 'Special Events',
        'contact-form-subject-feedback': 'Feedback',
        'contact-form-subject-other': 'Other',
        'contact-form-message': 'Message *',
        'contact-form-message-placeholder': 'Tell us about your inquiry or special request...',
        'btn-send-message': 'Send Message',
        'contact-find-us': 'Find Us',
        'btn-open-maps': 'Open in Google Maps',
        'contact-directions': 'How to Get Here',
        'contact-by-bus': 'By Bus: Take bus to Hoi An Central Station, then taxi to Cam An',
        'contact-by-taxi': 'By Taxi: Tell driver "111 Nguyen Phan Vinh, Cam An, Hoi An"',
        'contact-on-foot': 'On Foot: 15-minute walk from Hoi An Ancient Town',
        'contact-by-motorbike': 'By Motorbike: Parking available on nearby streets',
        'special-services-title': 'Special Services',
        'special-services-subtitle': 'Beyond our daily breakfast service featuring signature dishes, we offer special services to make your Vietnamese dining experience memorable',
        'service-group-reservations': 'Group Reservations',
        'service-group-desc': 'Perfect for family gatherings, business meetings, or group tours. We can accommodate groups of 10-30 people with advance notice.',
        'service-catering': 'Catering Services',
        'service-catering-desc': 'Bring authentic Vietnamese breakfast featuring our signature dishes to your office, hotel, or special event. We offer both traditional and customized menus.',
        'service-special-events': 'Special Events',
        'service-events-desc': 'Celebrate birthdays, anniversaries, or cultural events with our special Vietnamese breakfast packages and decorations.',
        'service-cooking-classes': 'Cooking Classes',
        'service-cooking-desc': 'Learn to make authentic Vietnamese breakfast dishes with our experienced chefs. Perfect for tourists and food enthusiasts.',
        'service-delivery': 'Delivery Service',
        'service-delivery-desc': 'Can\'t visit us? We offer delivery within Cam An and Hoi An Ancient Town for orders placed before 10:00 AM. Perfect for busy professionals and hotel guests.',
        'service-multilingual': 'Multilingual Staff',
        'service-multilingual-desc': 'Our staff speaks Vietnamese, English, and basic French. We\'re here to help international visitors feel welcome.',
        'faq-title': 'Frequently Asked Questions',
        'faq-reservation-q': 'Do I need to make a reservation?',
        'faq-reservation-a': 'Reservations are recommended for groups of 6 or more, especially on weekends. For smaller groups or individuals, walk-ins are welcome. We recommend arriving early (before 8:00 AM) for the best experience.',
        'faq-vegetarian-q': 'Do you offer vegetarian options?',
        'faq-vegetarian-a': 'Yes! We have several vegetarian dishes including vegetarian pho, tofu banh mi, and fresh spring rolls. We can also customize many of our signature dishes to accommodate dietary restrictions.',
        'faq-allergies-q': 'Can you accommodate food allergies?',
        'faq-allergies-a': 'Absolutely. Please inform our staff about any food allergies or dietary restrictions when ordering. We\'re happy to modify dishes or suggest alternatives to ensure your safety and enjoyment.',
        'faq-payment-q': 'What payment methods do you accept?',
        'faq-payment-a': 'We accept cash (Vietnamese Dong), major credit cards (Visa, MasterCard), and mobile payments (MoMo, ZaloPay). For catering and large orders, we can arrange bank transfers.',
        'faq-takeaway-q': 'Do you offer takeaway?',
        'faq-takeaway-a': 'Yes, we offer takeaway service for all our dishes. We use eco-friendly packaging to maintain the quality and temperature of your food. Takeaway orders are available during our opening hours.',
        'contact-cta-title': 'Ready to Experience Vietnamese Breakfast?',
        'contact-cta-desc': 'Visit us today to try our signature dishes or contact us for special arrangements. We can\'t wait to share the authentic flavors of Vietnam with you!',
        'btn-view-menu': 'View Our Menu',
        'btn-call-now': 'Call Us Now'
    },

    vn: {
        // Navigation
        'nav-home': 'Trang Chủ',
        'nav-dishes': 'Món Ăn',
        'nav-contact': 'Liên Hệ',

        // Hero Section
        'hero-title': 'THE MORNING SISTER BREAKFAST',
        'hero-subtitle': 'Ẩm Thực Sáng Việt Nam Chính Thống',
        'hero-description': 'Bắt đầu ngày mới với hương vị phong phú và thơm ngon của Việt Nam. 5 món ăn sáng đặc trưng của chúng tôi, được chế biến với tình yêu và công thức chính thống, sẽ đưa bạn đến với những con phố nhộn nhịp của Hội An mỗi buổi sáng.',
        'btn-explore-menu': 'Khám Phá Thực Đơn',
        'btn-visit-today': 'Ghé Thăm Hôm Nay',
        'feature-open-daily': 'Mở Cửa Hàng Ngày 8:00 Sáng',
        'feature-fresh-ingredients': 'Nguyên Liệu Tươi Địa Phương',
        'feature-made-with-love': 'Chế Biến Bằng Tình Yêu',
        'overlay-text': 'Công Thức Việt Nam Chính Thống',

        // Featured Dishes
        'featured-dishes-title': 'Món Ăn Sáng Đặc Trưng',
        'featured-dishes-subtitle': 'Khám phá hương vị chính thống tạo nên trải nghiệm ẩm thực sáng Việt Nam độc đáo',
        'pho-bo-title': 'Phở Bò (Phở Bò Việt Nam)',
        'pho-bo-desc': 'Phở đặc trưng của chúng tôi có bún tươi trong nước dùng bò thơm ngon với thịt bò mềm và rau thơm tươi. Một khởi đầu ấm áp và truyền thống cho bất kỳ buổi sáng Việt Nam nào.',
        'bo-ne-title': 'Bò Né (Thịt Bò Xào)',
        'bo-ne-desc': 'Món ăn phổ biến nhất của chúng tôi! Thịt bò xào với trứng, phục vụ trong chảo nóng với rau thơm tươi, rau củ và bánh mì giòn. Âm thanh xèo xèo và hương thơm sẽ đánh thức giác quan của bạn một cách hoàn hảo.',
        'bo-kho-title': 'Bò Kho (Thịt Bò Hầm)',
        'bo-kho-desc': 'Thịt bò hầm mềm trong gia vị thơm ngon với cà rốt và khoai tây, phục vụ với rau thơm tươi và cơm. Món ăn sáng Việt Nam bổ dưỡng và đậm đà sẽ giúp bạn tràn đầy năng lượng suốt ngày.',
        'tag-traditional': 'Truyền Thống',
        'tag-fresh': 'Tươi',
        'tag-popular': 'Phổ Biến',
        'tag-sizzling': 'Xèo Xèo',
        'tag-hearty': 'Bổ Dưỡng',
        'tag-aromatic': 'Thơm Ngon',

        // Vietnamese Culture Section
        'culture-title': 'Văn Hóa Ăn Sáng Việt Nam',
        'culture-desc-1': 'Ở Việt Nam, ăn sáng không chỉ là một bữa ăn—đó là sự tôn vinh cộng đồng, truyền thống và khởi đầu ngày mới. Ẩm thực sáng của chúng tôi phản ánh di sản ẩm thực phong phú của đất nước, kết hợp nguyên liệu địa phương tươi ngon với kỹ thuật nấu ăn truyền thống.',
        'culture-desc-2': 'Từ những con phố nhộn nhịp của Hội An đến vùng nông thôn yên bình, ăn sáng Việt Nam đưa mọi người lại gần nhau qua những tô phở nóng hổi, chảo bò né xèo xèo, thịt bò hầm bổ dưỡng và những món sáng truyền thống khác.',
        'culture-feature-1-title': 'Truyền Thống Sáng Sớm',
        'culture-feature-1-desc': 'Người Việt Nam bắt đầu ngày mới từ sớm, thường tụ tập tại các quán ăn địa phương để ăn sáng trước khi đi làm hoặc đi học.',
        'culture-feature-2-title': 'Tụ Họp Cộng Đồng',
        'culture-feature-2-desc': 'Ăn sáng là một hoạt động xã hội, nơi bạn bè và gia đình cùng nhau chia sẻ thức ăn và trò chuyện.',
        'culture-feature-3-title': 'Tươi & Địa Phương',
        'culture-feature-3-desc': 'Chúng tôi chỉ sử dụng nguyên liệu địa phương tươi ngon nhất, hỗ trợ nông dân địa phương và đảm bảo hương vị chính thống.',

        // Call to Action
        'cta-title': 'Trải Nghiệm Ăn Sáng Việt Nam Hôm Nay',
        'cta-desc': 'Hãy tham gia cùng chúng tôi mỗi buổi sáng để khám phá hương vị chính thống của Việt Nam. Từ phở truyền thống đến bò né xèo xèo và thịt bò hầm bổ dưỡng, mỗi món ăn đều kể một câu chuyện về di sản ẩm thực phong phú của chúng tôi.',
        'btn-view-menu': 'Xem Thực Đơn Đầy Đủ',
        'btn-visit-now': 'Ghé Thăm Ngay',

        // Footer
        'footer-tagline': 'Ăn Sáng Việt Nam Chính Thống',
        'footer-quick-links': 'Liên Kết Nhanh',
        'footer-contact-info': 'Thông Tin Liên Hệ',
        'footer-opening-hours': 'Giờ Mở Cửa',
        'footer-hours': 'T2-CN: 8:00 Sáng - 17:00 Chiều',
        'footer-copyright': '© 2024 - 2025 The Morning Sister Breakfast. Ẩm Thực Việt Nam Chính Thống. Bảo lưu mọi quyền.',

        // Dishes Page
        'dishes-page-title': 'Món Ăn Đặc Trưng',
        'dishes-page-subtitle': 'Trải nghiệm hương vị chính thống của Việt Nam với những món ăn sáng đặc trưng của chúng tôi',
        'tab-main-dishes': 'Món Chính',
        'tab-specialties': 'Đặc Sản',
        'tab-beverages': 'Đồ Uống',
        'pho-bo-detail-desc': 'Phở đặc trưng của chúng tôi được làm bằng kỹ thuật Việt Nam cổ xưa, sử dụng bún tươi, nước dùng bò thơm ngon, thịt bò mềm và rau thơm tươi. Mỗi tô được chế biến cẩn thận, tạo nên một bữa sáng ấm áp và đậm đà làm ấm lòng.',
        'pho-bo-fresh-daily': 'Tươi mỗi ngày lúc 8:00 sáng',
        'pho-bo-herbs': 'Rau thơm & rau củ tươi',
        'pho-bo-slow-cooked': 'Nước dùng ninh chậm',
        'pho-bo-tag-comforting': 'Ấm Áp',
        'bo-ne-detail-desc': 'Món ăn phổ biến nhất của chúng tôi! Thịt bò xào với trứng, phục vụ trong chảo nóng với rau thơm tươi, rau củ và bánh mì giòn. Âm thanh xèo xèo và hương thơm sẽ đánh thức giác quan của bạn và bắt đầu buổi sáng một cách hoàn hảo.',
        'bo-ne-weekend-special': 'Đặc biệt cuối tuần',
        'bo-ne-premium-beef': 'Thịt bò cao cấp',
        'bo-ne-chef-recommendation': 'Đầu bếp khuyên dùng',
        'bo-ne-tag-premium': 'Cao Cấp',
        'bo-kho-detail-desc': 'Thịt bò hầm mềm trong gia vị thơm ngon với cà rốt và khoai tây, phục vụ với rau thơm tươi và cơm. Món ăn bổ dưỡng này thể hiện hương vị phong phú của ẩm thực gia đình Việt Nam, hoàn hảo cho một bữa sáng thỏa mãn.',
        'bo-kho-slow-cooked-daily': 'Hầm chậm hàng ngày',
        'bo-kho-local-vegetables': 'Rau củ địa phương tươi',
        'bo-kho-traditional-recipe': 'Công thức truyền thống',
        'bo-kho-tag-traditional': 'Truyền Thống',
        'op-la-title': 'Ốp La Xíu Mại (Trứng Chiên với Thịt Viên)',
        'op-la-desc': 'Món trứng chiên Việt Nam thú vị nhồi thịt viên thơm ngon, rau thơm tươi và rau củ. Món ăn này kết hợp sự thoải mái của trứng với hương vị phong phú của thịt viên Việt Nam, tạo nên trải nghiệm ăn sáng hoàn hảo.',
        'op-la-made-to-order': 'Làm theo yêu cầu',
        'op-la-fresh-herbs': 'Rau thơm & rau củ tươi',
        'op-la-unique-combination': 'Kết hợp độc đáo',
        'op-la-tag-unique': 'Độc Đáo',
        'op-la-tag-savory': 'Đậm Đà',
        'banh-mi-title': 'Bánh Mì Xíu Mại (Bánh Mì với Thịt Viên)',
        'banh-mi-desc': 'Bánh mì Việt Nam giòn nhồi thịt viên đậm đà, rau củ tươi, ngò và nước sốt đặc biệt của chúng tôi. Biến tấu này của bánh mì cổ điển mang đến một lựa chọn ăn sáng độc đáo và thỏa mãn.',
        'banh-mi-available-all-day': 'Có sẵn cả ngày',
        'banh-mi-fresh-vegetables': 'Rau củ tươi',
        'banh-mi-innovative-twist': 'Biến tấu sáng tạo',
        'banh-mi-tag-innovative': 'Sáng Tạo',
        'banh-mi-tag-satisfying': 'Thỏa Mãn',
        'coffee-title': 'Cà Phê Việt Nam',
        'coffee-desc': 'Cà phê Việt Nam đậm đà phục vụ với sữa đặc có đường, tạo nên sự cân bằng hoàn hảo giữa đậm đà và ngọt ngào. Phục vụ nóng hoặc đá, đây là thức uống hoàn hảo đi kèm với bất kỳ bữa sáng Việt Nam nào.',
        'coffee-brewed-fresh': 'Pha tươi',
        'coffee-traditional-method': 'Phương pháp truyền thống',
        'coffee-perfect-pairing': 'Kết hợp hoàn hảo',
        'coffee-tag-strong': 'Đậm Đà',
        'coffee-tag-sweet': 'Ngọt Ngào',
        'tea-title': 'Trà Thảo Mộc Tươi',
        'tea-desc': 'Trà thảo mộc tươi mát làm từ thảo mộc và hoa địa phương tươi. Một thức uống nhẹ nhàng và thơm ngon bổ sung hoàn hảo cho các món ăn sáng Việt Nam của chúng tôi và hỗ trợ tiêu hóa.',
        'tea-brewed-to-order': 'Pha theo yêu cầu',
        'tea-local-herbs': 'Thảo mộc địa phương',
        'tea-health-benefits': 'Lợi ích sức khỏe',
        'tea-tag-refreshing': 'Tươi Mát',
        'tea-tag-healthy': 'Tốt Cho Sức Khỏe',
        'tea-tag-local': 'Địa Phương',
        'dishes-cta-title': 'Sẵn Sàng Trải Nghiệm Ăn Sáng Việt Nam?',
        'dishes-cta-desc': 'Hãy ghé thăm chúng tôi để nếm thử 5 món ăn đặc trưng và khám phá hương vị phong phú của Việt Nam',
        'btn-visit-today': 'Ghé Thăm Hôm Nay',
        'btn-get-in-touch': 'Liên Hệ',

        // Contact Page
        'contact-page-title': 'Liên Hệ',
        'contact-page-subtitle': 'Ghé thăm chúng tôi để trải nghiệm ăn sáng Việt Nam chính thống với những món ăn đặc trưng hoặc liên hệ để phục vụ tiệc và sự kiện đặc biệt',
        'contact-visit-location': 'Ghé Thăm Địa Điểm',
        'contact-address': '111 Nguyễn Phan Vinh<br>Cẩm An, Hội An<br>Quảng Nam 51300, Việt Nam',
        'contact-opening-hours': 'Giờ Mở Cửa',
        'contact-hours': '<strong>Thứ Hai - Chủ Nhật:</strong><br>8:00 Sáng - 17:00 Chiều',
        'contact-call-us': 'Gọi Cho Chúng Tôi',
        'contact-mobile': '<strong>Di động:</strong><br>+84 39 366 70 97',
        'contact-email-us': 'Gửi Email',
        'contact-general': '<strong>Tổng đài:</strong><br>themorningsisterbreakfast@gmail.com',
        'contact-send-message': 'Gửi Tin Nhắn',
        'contact-form-name': 'Họ Tên *',
        'contact-form-email': 'Địa Chỉ Email *',
        'contact-form-phone': 'Số Điện Thoại',
        'contact-form-subject': 'Chủ Đề *',
        'contact-form-subject-placeholder': 'Chọn chủ đề',
        'contact-form-subject-general': 'Tư Vấn Chung',
        'contact-form-subject-reservation': 'Đặt Bàn',
        'contact-form-subject-catering': 'Dịch Vụ Tiệc',
        'contact-form-subject-events': 'Sự Kiện Đặc Biệt',
        'contact-form-subject-feedback': 'Phản Hồi',
        'contact-form-subject-other': 'Khác',
        'contact-form-message': 'Tin Nhắn *',
        'contact-form-message-placeholder': 'Hãy cho chúng tôi biết về phản hồi hoặc yêu cầu đặc biệt của bạn...',
        'btn-send-message': 'Gửi Tin Nhắn',
        'contact-find-us': 'Tìm Chúng Tôi',
        'btn-open-maps': 'Mở Trong Google Maps',
        'contact-directions': 'Cách Đến Đây',
        'contact-by-bus': 'Bằng Xe Buýt: Đi xe buýt đến Trạm Trung Tâm Hội An, sau đó taxi đến Cẩm An',
        'contact-by-taxi': 'Bằng Taxi: Nói với tài xế "111 Nguyễn Phan Vinh, Cẩm An, Hội An"',
        'contact-on-foot': 'Đi Bộ: 15 phút đi bộ từ Phố Cổ Hội An',
        'contact-by-motorbike': 'Bằng Xe Máy: Có chỗ đậu xe trên các con phố gần đó',
        'special-services-title': 'Dịch Vụ Đặc Biệt',
        'special-services-subtitle': 'Ngoài dịch vụ ăn sáng hàng ngày với những món ăn đặc trưng, chúng tôi cung cấp các dịch vụ đặc biệt để làm cho trải nghiệm ẩm thực Việt Nam của bạn trở nên đáng nhớ',
        'service-group-reservations': 'Đặt Bàn Nhóm',
        'service-group-desc': 'Hoàn hảo cho tụ họp gia đình, họp kinh doanh hoặc tour nhóm. Chúng tôi có thể phục vụ nhóm từ 10-30 người với thông báo trước.',
        'service-catering': 'Dịch Vụ Tiệc',
        'service-catering-desc': 'Mang ăn sáng Việt Nam chính thống với những món ăn đặc trưng đến văn phòng, khách sạn hoặc sự kiện đặc biệt của bạn. Chúng tôi cung cấp cả thực đơn truyền thống và tùy chỉnh.',
        'service-special-events': 'Sự Kiện Đặc Biệt',
        'service-events-desc': 'Tổ chức sinh nhật, kỷ niệm hoặc sự kiện văn hóa với gói ăn sáng Việt Nam đặc biệt và trang trí của chúng tôi.',
        'service-cooking-classes': 'Lớp Học Nấu Ăn',
        'service-cooking-desc': 'Học cách làm các món ăn sáng Việt Nam chính thống với các đầu bếp giàu kinh nghiệm của chúng tôi. Hoàn hảo cho khách du lịch và những người đam mê ẩm thực.',
        'service-delivery': 'Dịch Vụ Giao Hàng',
        'service-delivery-desc': 'Không thể ghé thăm chúng tôi? Chúng tôi cung cấp dịch vụ giao hàng trong Cẩm An và Phố Cổ Hội An cho đơn hàng đặt trước 10:00 sáng. Hoàn hảo cho các chuyên gia bận rộn và khách khách sạn.',
        'service-multilingual': 'Nhân Viên Đa Ngôn Ngữ',
        'service-multilingual-desc': 'Nhân viên của chúng tôi nói tiếng Việt, tiếng Anh và tiếng Pháp cơ bản. Chúng tôi ở đây để giúp khách quốc tế cảm thấy được chào đón.',
        'faq-title': 'Câu Hỏi Thường Gặp',
        'faq-reservation-q': 'Tôi có cần đặt bàn không?',
        'faq-reservation-a': 'Chúng tôi khuyên bạn nên đặt bàn cho nhóm từ 6 người trở lên, đặc biệt vào cuối tuần. Đối với nhóm nhỏ hơn hoặc cá nhân, khách đến trực tiếp đều được chào đón. Chúng tôi khuyên bạn nên đến sớm (trước 8:00 sáng) để có trải nghiệm tốt nhất.',
        'faq-vegetarian-q': 'Bạn có món chay không?',
        'faq-vegetarian-a': 'Có! Chúng tôi có một số món chay bao gồm phở chay, bánh mì đậu phụ và gỏi cuốn tươi. Chúng tôi cũng có thể tùy chỉnh nhiều món ăn đặc trưng để phù hợp với chế độ ăn kiêng.',
        'faq-allergies-q': 'Bạn có thể phục vụ người dị ứng thực phẩm không?',
        'faq-allergies-a': 'Hoàn toàn có thể. Vui lòng thông báo cho nhân viên của chúng tôi về bất kỳ dị ứng thực phẩm hoặc hạn chế ăn uống nào khi đặt món. Chúng tôi rất vui được điều chỉnh món ăn hoặc đề xuất các lựa chọn thay thế để đảm bảo an toàn và sự hài lòng của bạn.',
        'faq-payment-q': 'Bạn chấp nhận phương thức thanh toán nào?',
        'faq-payment-a': 'Chúng tôi chấp nhận tiền mặt (Đồng Việt Nam), thẻ tín dụng chính (Visa, MasterCard) và thanh toán di động (MoMo, ZaloPay). Đối với tiệc và đơn hàng lớn, chúng tôi có thể sắp xếp chuyển khoản ngân hàng.',
        'faq-takeaway-q': 'Bạn có dịch vụ mang về không?',
        'faq-takeaway-a': 'Có, chúng tôi cung cấp dịch vụ mang về cho tất cả các món ăn. Chúng tôi sử dụng bao bì thân thiện với môi trường để duy trì chất lượng và nhiệt độ của thức ăn. Đơn hàng mang về có sẵn trong giờ mở cửa của chúng tôi.',
        'contact-cta-title': 'Sẵn Sàng Trải Nghiệm Ăn Sáng Việt Nam?',
        'contact-cta-desc': 'Hãy ghé thăm chúng tôi hôm nay để thử những món ăn đặc trưng hoặc liên hệ với chúng tôi để sắp xếp đặc biệt. Chúng tôi không thể chờ đợi để chia sẻ hương vị chính thống của Việt Nam với bạn!',
        'btn-view-menu': 'Xem Thực Đơn',
        'btn-call-now': 'Gọi Ngay'
    }
};

// Language switching functionality
class LanguageSwitcher {
    constructor() {
        this.currentLanguage = this.getStoredLanguage() || 'en';
        this.init();
    }

    init() {
        this.createLanguageSwitcher();
        this.applyLanguage(this.currentLanguage);
        this.bindEvents();
    }

    getStoredLanguage() {
        return localStorage.getItem('preferred-language') || 'en';
    }

    setStoredLanguage(lang) {
        localStorage.setItem('preferred-language', lang);
    }

    createLanguageSwitcher() {
        // Find the navigation container
        const navContainer = document.querySelector('.nav-container');
        if (!navContainer) return;

        // Create language switcher HTML - only one button that toggles
        const languageSwitcher = document.createElement('div');
        languageSwitcher.className = 'language-switcher';
        languageSwitcher.innerHTML = `
            <button class="lang-btn active" data-lang="${this.currentLanguage}">
                <span class="flag">${this.currentLanguage === 'en' ? '🇺🇸' : '🇻🇳'}</span>
                <span class="lang-text">${this.currentLanguage === 'en' ? 'EN' : 'VN'}</span>
            </button>
        `;

        // Insert after the navigation menu
        const navMenu = navContainer.querySelector('.nav-menu');
        if (navMenu) {
            navContainer.insertBefore(languageSwitcher, navMenu.nextSibling);
        } else {
            navContainer.appendChild(languageSwitcher);
        }
    }

    bindEvents() {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.currentTarget.getAttribute('data-lang');
                this.switchLanguage(lang);
            });
        });
    }

    switchLanguage(lang) {
        // Toggle between EN and VN
        const newLang = this.currentLanguage === 'en' ? 'vn' : 'en';

        this.currentLanguage = newLang;
        this.setStoredLanguage(newLang);
        this.applyLanguage(newLang);
        this.updateToggleButton(newLang);
    }

    updateActiveButton(lang) {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });

        // For mobile switch button, we need to handle the visual switch
        const languageSwitcher = document.querySelector('.language-switcher');
        if (languageSwitcher && window.innerWidth <= 768) {
            // Remove all active classes first
            langButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to the selected language
            const activeBtn = document.querySelector(`[data-lang="${lang}"]`);
            if (activeBtn) {
                activeBtn.classList.add('active');
            }
        }
    }

    updateToggleButton(lang) {
        const langButton = document.querySelector('.lang-btn');
        if (langButton) {
            // Update button attributes
            langButton.setAttribute('data-lang', lang);

            // Update flag and text
            const flag = langButton.querySelector('.flag');
            const text = langButton.querySelector('.lang-text');

            if (flag && text) {
                flag.textContent = lang === 'en' ? '🇺🇸' : '🇻🇳';
                text.textContent = lang === 'en' ? 'EN' : 'VN';
            }

            // Keep button active
            langButton.classList.add('active');
        }
    }

    applyLanguage(lang) {
        const translations = LANGUAGE_DATA[lang];
        if (!translations) return;

        // Update all elements with data-translate attribute
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = translations[key];
                } else if (element.tagName === 'INPUT' && element.placeholder) {
                    element.placeholder = translations[key];
                } else if (element.tagName === 'OPTION') {
                    element.textContent = translations[key];
                } else if (element.tagName === 'LABEL') {
                    element.textContent = translations[key];
                } else {
                    element.innerHTML = translations[key];
                }
            }
        });

        // Update page title and meta description
        this.updatePageMeta(lang);
    }

    updatePageMeta(lang) {
        const translations = LANGUAGE_DATA[lang];
        if (!translations) return;

        // Update page title
        if (document.title.includes('The Morning Sister Breakfast')) {
            if (window.location.pathname.includes('dishes')) {
                document.title = `${translations['dishes-page-title']} - The Morning Sister Breakfast`;
            } else if (window.location.pathname.includes('contact')) {
                document.title = `${translations['contact-page-title']} - The Morning Sister Breakfast`;
            } else {
                document.title = `The Morning Sister Breakfast - ${translations['hero-subtitle']}`;
            }
        }

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            if (window.location.pathname.includes('dishes')) {
                metaDescription.content = `${translations['dishes-page-subtitle']} - The Morning Sister Breakfast`;
            } else if (window.location.pathname.includes('contact')) {
                metaDescription.content = `${translations['contact-page-subtitle']} - The Morning Sister Breakfast`;
            } else {
                metaDescription.content = translations['hero-description'];
            }
        }

        // Update HTML lang attribute
        document.documentElement.lang = lang === 'vn' ? 'vi' : 'en';
    }
}

// Initialize language switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();
});
