# 🎀 Nguyên tắc dự án - Romantic Landing Page 8/3

## 1. Nguyên tắc cốt lõi (Core Principles)

### 1.1 Nội dung trước hiệu ứng
- **Cảm xúc là ưu tiên #1** → Lời chúc, thư tay, ký ức chung
- Animation phục vụ nội dung, không phô trương
- Chọn animation với mục đích, không dùng vì "đẹp"

### 1.2 Đơn giản và tập trung
- Mỗi section có 1 thông điệp chính
- Không overload thông tin
- Whitespace (khoảng trắng) là bạn

### 1.3 Mobile-first Design
- Thiết kế cho điện thoại trước
- Desktop là nâng cấp, không phính bản
- Test trên device thực, không chỉ DevTools

### 1.4 Hiệu suất (Performance)
- Load < 3 giây
- Images tối ưu (compress, lazy-load)
- Không có thư viện nặng không cần thiết

### 1.5 Tính riêng tư và an toàn
- Không dùng backend
- Dữ liệu chỉ lưu cục bộ (localStorage nếu cần)
- Không track hay share dữ liệu cá nhân

---

## 2. Giá trị tình cảm (Emotional Values)

### Ấm áp (Warmth)
- Màu sắc nhẹ, dễ chịu (không sắc cạnh)
- Font chữ dễ đọc, thân thiện
- Spacing thoáng, không chật chội

### Chân thực (Authenticity)
- Lời nói từ trái tim, không cố trang trọng
- Ảnh thực tế, không stock images
- Timeline là những khoảnh khắc thật

### Bất ngờ (Surprise)
- Nút Surprise có giá trị thực, không vô nghĩa
- Mỗi lần bấm có điều gì mới
- Kết thúc trang có twist tích cực

### Kết nối (Connection)
- Scroll = hành trình chung
- Mỗi section nhắc lại "chúng ta"
- Call-to-action có tham vọng (gọi/chat)

---

## 3. Hướng dẫn nội dung (Content Guidelines)

### Tông giọng (Tone)
- [ ] Không chính thức, không cứng nhắc
- [ ] Có chút hài hước/tự tếu nếu phù hợp
- [ ] Lòng thành không sentimental quá

### Từ ngôn (Language)
- Dùng "em/anh" thay vì "bạn"
- Dùng "chúng ta" để tạo kết nối
- Tránh loại bỏ phủ định, nhắc đến tích cực

### Cấu trúc nội dung
```
Hero: Lời chúc + Tên người yêu
    ↓
DaysTogether: "Chúng ta đã bên nhau X ngày"
    ↓
Countdown: "Còn X ngày nữa gặp em"
    ↓
Timeline: Những cột mốc quan trọng
    ↓
Gallery: Ảnh ký ưa thích
    ↓
LoveLetter: Thư cá nhân
    ↓
Surprise: Bất ngờ cuối cùng
```

---

## 4. Tiêu chuẩn thiết kế (Design Standards)

### Màu sắc (Color Palette)
- **Primary (Rose/Pink)**: `#ec4899` - Chủ đạo, tình yêu
- **Secondary (Neutral)**: `#f3f4f6` - Background
- **Text**: `#1f2937` - Đọc thoải mái
- **Accent (Warm)**: `#fbbf24` - Highlight, surprise

### Typography
- **Heading**: Font serif hoặc sans-serif mềm (ví: Poppins, Inter)
- **Body**: Sans-serif dễ đọc (Inter, Segoe UI)
- **Size**: Mobile-first (14-16px body, scale up for desktop)

### Animation Principles
- **Easing**: Smooth, không quá nhanh (`ease-in-out`)
- **Duration**: 0.3s - 1s (không lâu)
- **Trigger**: Scroll hoặc user interaction
- **Subtle**: Không làm sao lãng, chỉ hỗ trợ

### Spacing System
- Use multiples of 4px (4, 8, 12, 16, 24, 32, ...)
- Section padding: 24px mobile, 40px desktop
- Component gap: 12-16px

---

## 5. Checklist đạo đức (Ethics Checklist)

- [ ] Nội dung chính xác, không nói dối
- [ ] Không dùng công nghệ để áp đặt hay kiểm soát
- [ ] Tôn trọng quyền riêng tư
- [ ] Accessible cho người khác chiều, nếu cần
- [ ] Không spam hoặc manipulate cảm xúc

---

## 6. Success Metrics

✅ Người yêu xem hết trang mà không bỏ cuộn ngang (không bị phiền)
✅ Người yêu có phản ứng cảm xúc tích cực
✅ Trang load < 3 giây trên 4G
✅ 100% responsive - không bị lỗi layout trên bất kỳ device nào
✅ Không có console error
