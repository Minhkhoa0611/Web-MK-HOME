const chatBody = document.getElementById("chat-body");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

const chatbotData = {
    "MK Home là gì?": "MK Home là công ty chuyên về thiết kế và xây dựng các dự án lớn nhỏ tại Việt Nam.",
    "Dịch vụ của MK Home?": "Chúng tôi cung cấp các dịch vụ thiết kế kiến trúc, kết cấu, nội thất, và thi công xây dựng.",
    "Liên hệ MK Home như thế nào?": "Bạn có thể liên hệ qua email: mkcons.az@gmail.com hoặc hotline: 0867544809.",
    "Công ty ở đâu?": "Cty chúng tôi ở Thôn Bình Trị, Xã Ninh Bình, Thị xã Ninh Hòa, Tỉnh Khánh Hòa",
    "Thời gian làm việc của công ty?": "Công ty chúng tôi hoặt động từ t2-t6 từ 8h- 17h. CN chúng tôi nghĩ để đi Chill",
    "Tôi cần 1 số mẫu nhà đẹp": "Dưới đây là một số mẫu nhà đẹp:",
    "Chi phí xây dựng nhà là bao nhiêu?": "Chi phí xây dựng phụ thuộc vào diện tích, thiết kế và vật liệu. Hãy liên hệ để được báo giá chi tiết.",
    "Thời gian hoàn thành một dự án là bao lâu?": "Thời gian hoàn thành phụ thuộc vào quy mô và yêu cầu của dự án. Thông thường từ 3-6 tháng.",
    "MK Home có hỗ trợ thiết kế nội thất không?": "Có, chúng tôi cung cấp dịch vụ thiết kế nội thất chuyên nghiệp, phù hợp với nhu cầu của khách hàng.",
    "Vật liệu xây dựng nào tốt nhất?": "Vật liệu xây dựng tốt nhất phụ thuộc vào ngân sách và yêu cầu của bạn. Chúng tôi sẽ tư vấn vật liệu phù hợp nhất."
};

// Thư mục chứa ảnh
const folder = "MauTK/";

const galleries = {
    "galleryNhapho": {
        title: "Thiết Kế Nhà Phố 2 Tầng 2025",
        images: [
            "Thiết Kế Nhà Phố 2 Tầng 2025/Thiết Kế Nhà Phố 2 Tầng 2025 1.png",
            "Thiết Kế Nhà Phố 2 Tầng 2025/Thiết Kế Nhà Phố 2 Tầng 2025 2.png",
            "Thiết Kế Nhà Phố 2 Tầng 2025/Thiết Kế Nhà Phố 2 Tầng 2025 3.png",
            "Thiết Kế Nhà Phố 2 Tầng 2025/Thiết Kế Nhà Phố 2 Tầng 2025 4.png",
            "Thiết Kế Nhà Phố 2 Tầng 2025/Thiết Kế Nhà Phố 2 Tầng 2025 5.png",
            "Thiết Kế Nhà Phố 2 Tầng 2025/Thiết Kế Nhà Phố 2 Tầng 2025 6.png",
            "Thiết Kế Nhà Phố 2 Tầng 2025/Thiết Kế Nhà Phố 2 Tầng 2025 7.png"
        ]
    },
    "galleryNhadep": {
        title: "Thiết Kế Nhà Hộp Đẹp Xinh 2025",
        images: [
            "Thiết Kế Nhà Hộp Đẹp Xinh 2025/Thiết Kế Nhà Hộp Đẹp Xinh 2025 1.png",
            "Thiết Kế Nhà Hộp Đẹp Xinh 2025/Thiết Kế Nhà Hộp Đẹp Xinh 2025 2.png",
            "Thiết Kế Nhà Hộp Đẹp Xinh 2025/Thiết Kế Nhà Hộp Đẹp Xinh 2025 3.png",
            "Thiết Kế Nhà Hộp Đẹp Xinh 2025/Thiết Kế Nhà Hộp Đẹp Xinh 2025 4.png",
            "Thiết Kế Nhà Hộp Đẹp Xinh 2025/Thiết Kế Nhà Hộp Đẹp Xinh 2025 5.png",
            "Thiết Kế Nhà Hộp Đẹp Xinh 2025/Thiết Kế Nhà Hộp Đẹp Xinh 2025 6.png",
            "Thiết Kế Nhà Hộp Đẹp Xinh 2025/Thiết Kế Nhà Hộp Đẹp Xinh 2025 7.png"
        ]
    },
    "galleryNVS": {
        title: "Thiết Kế NVS Hiện Đại 2025",
        images: [
            "Thiết Kế NVS Hiện Đại 2025/Thiết Kế NVS Hiện Đại 2025 1.png",
            "Thiết Kế NVS Hiện Đại 2025/Thiết Kế NVS Hiện Đại 2025 2.png",
            "Thiết Kế NVS Hiện Đại 2025/Thiết Kế NVS Hiện Đại 2025 3.png",
            "Thiết Kế NVS Hiện Đại 2025/Thiết Kế NVS Hiện Đại 2025 4.png",
            "Thiết Kế NVS Hiện Đại 2025/Thiết Kế NVS Hiện Đại 2025 5.png"
        ]
    },
    "galleryBep": {
        title: "Thiết Kế Phòng Bếp Sang Trọng 2025",
        images: [
            "Thiết Kế Phòng Bếp Sang Trọng 2025/Thiết Kế Phòng Bếp Sang Trọng 2025 1.png",
            "Thiết Kế Phòng Bếp Sang Trọng 2025/Thiết Kế Phòng Bếp Sang Trọng 2025 2.png",
            "Thiết Kế Phòng Bếp Sang Trọng 2025/Thiết Kế Phòng Bếp Sang Trọng 2025 3.png",
            "Thiết Kế Phòng Bếp Sang Trọng 2025/Thiết Kế Phòng Bếp Sang Trọng 2025 4.png",
            "Thiết Kế Phòng Bếp Sang Trọng 2025/Thiết Kế Phòng Bếp Sang Trọng 2025 5.png",
            "Thiết Kế Phòng Bếp Sang Trọng 2025/Thiết Kế Phòng Bếp Sang Trọng 2025 6.png",
            "Thiết Kế Phòng Bếp Sang Trọng 2025/Thiết Kế Phòng Bếp Sang Trọng 2025 7.png"
        ]
    },
    "galleryPhongKhach": {
        title: "Thiết Kế Phòng Khách 2025",
        images: [
            "Thiết Kế Phòng Khách 2025/Thiết Kế Phòng Khách 2025 1.png",
            "Thiết Kế Phòng Khách 2025/Thiết Kế Phòng Khách 2025 2.png",
            "Thiết Kế Phòng Khách 2025/Thiết Kế Phòng Khách 2025 3.png",
            "Thiết Kế Phòng Khách 2025/Thiết Kế Phòng Khách 2025 4.png",
            "Thiết Kế Phòng Khách 2025/Thiết Kế Phòng Khách 2025 5.png",
            "Thiết Kế Phòng Khách 2025/Thiết Kế Phòng Khách 2025 6.png"
        ]
    },
    "galleryCongNha": {
        title: "Thiết Kế Cổng Nhà Đẹp 2025",
        images: [
            "Thiết Kế Cổng Nhà Đẹp 2025/Thiết Kế Cổng Nhà Đẹp 2025 1.png",
            "Thiết Kế Cổng Nhà Đẹp 2025/Thiết Kế Cổng Nhà Đẹp 2025 2.png",
            "Thiết Kế Cổng Nhà Đẹp 2025/Thiết Kế Cổng Nhà Đẹp 2025 3.png",
            "Thiết Kế Cổng Nhà Đẹp 2025/Thiết Kế Cổng Nhà Đẹp 2025 4.png",
            "Thiết Kế Cổng Nhà Đẹp 2025/Thiết Kế Cổng Nhà Đẹp 2025 5.png"
        ]
    },
    "galleryShopTT": {
        title: "Thiết Kế Shop Thời Trang Đẹp",
        images: [
            "Thiết Kế Shop Thời Trang Đẹp/Thiết Kế Shop Thời Trang Đẹp 1.png",
            "Thiết Kế Shop Thời Trang Đẹp/Thiết Kế Shop Thời Trang Đẹp 2.png",
            "Thiết Kế Shop Thời Trang Đẹp/Thiết Kế Shop Thời Trang Đẹp 3.png",
            "Thiết Kế Shop Thời Trang Đẹp/Thiết Kế Shop Thời Trang Đẹp 4.png",
            "Thiết Kế Shop Thời Trang Đẹp/Thiết Kế Shop Thời Trang Đẹp 5.png",
            "Thiết Kế Shop Thời Trang Đẹp/Thiết Kế Shop Thời Trang Đẹp 6.png",
            "Thiết Kế Shop Thời Trang Đẹp/Thiết Kế Shop Thời Trang Đẹp 7.png"
        ]
    },
    "galleryCafe": {
        title: "Thiết Kế Quán Cafe Sang Trọng",
        images: [
            "Thiết Kế Quán Cafe Sang Trọng/Thiết Kế Quán Cafe Sang Trọng 1.png",
            "Thiết Kế Quán Cafe Sang Trọng/Thiết Kế Quán Cafe Sang Trọng 2.png",
            "Thiết Kế Quán Cafe Sang Trọng/Thiết Kế Quán Cafe Sang Trọng 3.png",
            "Thiết Kế Quán Cafe Sang Trọng/Thiết Kế Quán Cafe Sang Trọng 4.png",
            "Thiết Kế Quán Cafe Sang Trọng/Thiết Kế Quán Cafe Sang Trọng 5.png",
            "Thiết Kế Quán Cafe Sang Trọng/Thiết Kế Quán Cafe Sang Trọng 6.png",
            "Thiết Kế Quán Cafe Sang Trọng/Thiết Kế Quán Cafe Sang Trọng 7.png",
            "Thiết Kế Quán Cafe Sang Trọng/Thiết Kế Quán Cafe Sang Trọng 8.png"
        ]
    }
};

const suggestionsContainer = document.createElement("div"); // Tạo container cho các gợi ý
suggestionsContainer.classList.add("suggestions-container");
chatBody.appendChild(suggestionsContainer);

// Tạo và hiển thị tin nhắn mẫu phía trên khung nhập
function createSampleMessageButton() {
    const sampleMessageContainer = document.createElement("div");
    sampleMessageContainer.classList.add("sample-message-container");
    sampleMessageContainer.style.marginBottom = "10px"; // Khoảng cách dưới khung nhập

    const sampleMessageButton = document.createElement("button");
    sampleMessageButton.textContent = "Tôi cần gập tư vấn viên";
    sampleMessageButton.classList.add("sample-message-button");
    sampleMessageButton.style.padding = "10px 20px";
    sampleMessageButton.style.backgroundColor = "#007bff";
    sampleMessageButton.style.color = "#ffffff";
    sampleMessageButton.style.border = "none";
    sampleMessageButton.style.borderRadius = "5px";
    sampleMessageButton.style.cursor = "pointer";
    sampleMessageButton.onclick = () => {
        userInput.value = "Tôi cần gập tư vấn viên"; // Gán tin nhắn mẫu vào khung nhập
        sendMessage(); // Gửi tin nhắn
    };

    sampleMessageContainer.appendChild(sampleMessageButton);
    chatBody.parentElement.insertBefore(sampleMessageContainer, chatBody); // Hiển thị phía trên khung chat
}

// Gọi hàm tạo tin nhắn mẫu khi trang tải
window.addEventListener("load", () => {
    createSampleMessageButton();
    console.info("Sample message button added.");
});

// Danh sách từ nhạy cảm cần lọc
const sensitiveWords = ["lồn", "cặc", "đéo", "chó", "địt", "mẹ", "thằng cha", "thằng chó"];

// Hàm lọc từ nhạy cảm
function filterSensitiveWords(message) {
    let filteredMessage = message;
    sensitiveWords.forEach(word => {
        const regex = new RegExp(`\\b${word}\\b`, "gi"); // Tìm từ nhạy cảm không phân biệt hoa thường
        filteredMessage = filteredMessage.replace(regex, "***");
    });
    return filteredMessage;
}

// Thêm tin nhắn vào giao diện (có lọc từ nhạy cảm)
function addMessage(message, isBot = false) {
    const filteredMessage = filterSensitiveWords(message); // Lọc từ nhạy cảm
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", isBot ? "bot" : "user");

    if (isBot) {
        messageElement.style.backgroundColor = "#e6f7ff"; // Nền xanh nhạt cho bot
        messageElement.style.color = "#005b96"; // Màu chữ xanh đậm
        messageElement.style.borderRadius = "10px"; // Bo góc
        messageElement.style.padding = "10px"; // Thêm khoảng cách bên trong
        messageElement.style.margin = "5px 0"; // Khoảng cách giữa các tin nhắn
        messageElement.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)"; // Đổ bóng nhẹ
    } else {
        messageElement.style.backgroundColor = "#007bff"; // Nền xanh đậm cho người dùng
        messageElement.style.color = "#ffffff"; // Màu chữ trắng
        messageElement.style.borderRadius = "10px"; // Bo góc
        messageElement.style.padding = "10px"; // Thêm khoảng cách bên trong
        messageElement.style.margin = "5px 0"; // Khoảng cách giữa các tin nhắn
        messageElement.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)"; // Đổ bóng nhẹ
        messageElement.style.alignSelf = "flex-end"; // Canh phải cho tin nhắn người dùng
    }

    messageElement.textContent = filteredMessage;
    chatBody.appendChild(messageElement);
    scrollToBottom();
}

// Thêm hình ảnh vào giao diện
function addImageMessage(galleries) {
    Object.values(galleries).forEach(gallery => {
        const galleryContainer = document.createElement("div");
        galleryContainer.classList.add("gallery-container");
        galleryContainer.style.backgroundColor = "#ffffff"; // Nền trắng
        galleryContainer.style.padding = "10px"; // Thêm khoảng cách bên trong
        galleryContainer.style.borderRadius = "8px"; // Bo góc
        galleryContainer.style.margin = "10px 0"; // Khoảng cách giữa các khung
        galleryContainer.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)"; // Đổ bóng

        // Thêm tiêu đề của gallery
        const titleElement = document.createElement("h3");
        titleElement.textContent = gallery.title;
        titleElement.classList.add("gallery-title");
        titleElement.style.marginBottom = "10px"; // Khoảng cách dưới tiêu đề
        titleElement.style.color = "#000000"; // Màu đen
        titleElement.style.fontWeight = "bold"; // In đậm
        galleryContainer.appendChild(titleElement);

        // Thêm ảnh đại diện
        const imgElement = document.createElement("img");
        imgElement.src = folder + gallery.images[0]; // Ảnh đầu tiên làm đại diện
        imgElement.classList.add("chat-image");
        imgElement.style.width = "150px"; // Giảm kích thước ảnh
        imgElement.style.height = "auto"; // Giữ tỉ lệ ảnh
        imgElement.style.borderRadius = "5px"; // Bo góc ảnh
        imgElement.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.2)"; // Đổ bóng ảnh
        imgElement.style.cursor = "pointer"; // Con trỏ dạng click
        imgElement.onclick = () => openGalleryPopup(gallery); // Mở popup khi nhấn vào ảnh
        galleryContainer.appendChild(imgElement);

        chatBody.appendChild(galleryContainer); // Thêm từng khung gallery vào chat body
    });

    scrollToBottom();
}

// Mở popup hiển thị tất cả ảnh trong gallery
function openGalleryPopup(gallery) {
    // Tạo overlay
    const overlay = document.createElement("div");
    overlay.classList.add("popup-overlay");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    overlay.style.zIndex = "1000";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";

    // Tạo container cho popup
    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");
    popupContainer.style.backgroundColor = "#ffffff";
    popupContainer.style.padding = "20px";
    popupContainer.style.borderRadius = "8px";
    popupContainer.style.maxWidth = "80%";
    popupContainer.style.maxHeight = "80%";
    popupContainer.style.overflowY = "auto";

    // Thêm tiêu đề của gallery
    const titleElement = document.createElement("h3");
    titleElement.textContent = gallery.title;
    titleElement.style.marginBottom = "10px";
    titleElement.style.color = "#000000";
    titleElement.style.fontWeight = "bold";
    popupContainer.appendChild(titleElement);

    // Thêm các ảnh trong gallery
    const imagesWrapper = document.createElement("div");
    imagesWrapper.style.display = "flex";
    imagesWrapper.style.flexWrap = "wrap";
    imagesWrapper.style.gap = "10px";

    gallery.images.forEach(img => {
        const imgElement = document.createElement("img");
        imgElement.src = folder + img;
        imgElement.style.width = "150px";
        imgElement.style.height = "auto";
        imgElement.style.borderRadius = "5px";
        imgElement.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.2)";
        imagesWrapper.appendChild(imgElement);
    });

    popupContainer.appendChild(imagesWrapper);

    // Thêm nút đóng popup
    const closeButton = document.createElement("button");
    closeButton.textContent = "Đóng";
    closeButton.style.marginTop = "20px";
    closeButton.style.padding = "10px 20px";
    closeButton.style.backgroundColor = "#ff4d4d";
    closeButton.style.color = "#ffffff";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "5px";
    closeButton.style.cursor = "pointer";
    closeButton.onclick = () => document.body.removeChild(overlay); // Đóng popup
    popupContainer.appendChild(closeButton);

    overlay.appendChild(popupContainer);
    document.body.appendChild(overlay);
}

// Cuộn xuống cuối cùng
function scrollToBottom() {
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Hiển thị các gợi ý trong khung chat
function showSuggestions() {
    // Không tự động hiển thị gợi ý khi tải trang
    console.warn("showSuggestions is no longer used for auto-display.");
}

// Gọi hàm hiển thị gợi ý khi trang tải
window.addEventListener("load", () => {
    console.info("Chat initialized with a brighter theme.");
});

// Tính độ tương đồng giữa hai chuỗi
function calculateSimilarity(str1, str2) {
    const s1 = str1.toLowerCase().split(" ");
    const s2 = str2.toLowerCase().split(" ");
    const intersection = s1.filter(word => s2.includes(word));
    return intersection.length / Math.max(s1.length, s2.length);
}

// Trích xuất thông tin liên hệ từ tin nhắn
function extractContactInfo(message) {
    const phoneRegex = /\b\d{10,11}\b/; // Số điện thoại 10-11 chữ số
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/; // Email
    const linkRegex = /(?:https?:\/\/|www\.)[^\s]+/i; // Bất kỳ link nào (HTTP/HTTPS hoặc bắt đầu với www)

    const phoneMatch = message.match(phoneRegex);
    const emailMatch = message.match(emailRegex);
    const linkMatch = message.match(linkRegex);

    return phoneMatch || emailMatch || linkMatch ? (phoneMatch || emailMatch || linkMatch)[0] : null;
}

// Gửi thông tin liên hệ đến bot Telegram
function sendToTelegram(contactInfo) {
    const telegramToken = "7699835490:AAHXNqBbklJBgBxKBhRm2vBi2Ssjls4YVuw"; // Thay bằng token của bot Telegram
    const chatId = "7991407654"; // Thay bằng chat ID của bạn
    const telegramApiUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    const message = `Thông tin liên hệ nhận được: ${contactInfo}`;

    fetch(telegramApiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => {
        if (!response.ok) {
            console.error("Không thể gửi thông tin đến Telegram:", response.statusText);
        } else {
            console.info("Thông tin liên hệ đã được gửi đến Telegram.");
        }
    })
    .catch(error => {
        console.error("Lỗi khi gửi thông tin đến Telegram:", error);
    });
}

let isConnectedToTelegram = false; // Trạng thái kết nối với Telegram
let lastUpdateId = 0; // ID của cập nhật cuối cùng đã xử lý

// Gửi tin nhắn đến Telegram
function sendMessageToTelegram(message) {
    const telegramToken = "7699835490:AAHXNqBbklJBgBxKBhRm2vBi2Ssjls4YVuw"; // Thay bằng token của bot Telegram
    const chatId = "7991407654"; // Thay bằng chat ID của bạn
    const telegramApiUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    fetch(telegramApiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => {
        if (!response.ok) {
            console.error("Không thể gửi tin nhắn đến Telegram:", response.statusText);
        } else {
            console.info("Tin nhắn đã được gửi đến Telegram.");
        }
    })
    .catch(error => {
        console.error("Lỗi khi gửi tin nhắn đến Telegram:", error);
    });
}

// Nhận phản hồi từ Telegram
function pollTelegramUpdates() {
    const telegramToken = "7699835490:AAHXNqBbklJBgBxKBhRm2vBi2Ssjls4YVuw"; // Thay bằng token của bot Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${telegramToken}/getUpdates?offset=${lastUpdateId + 1}`;

    fetch(telegramApiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.ok && data.result.length > 0) {
                data.result.forEach(update => {
                    if (update.message && update.message.text) {
                        const telegramMessage = update.message.text;
                        addMessage(`Tư vấn viên: ${telegramMessage}`, true); // Hiển thị tin nhắn từ Telegram trong chatbox
                    }
                    lastUpdateId = update.update_id; // Cập nhật ID cuối cùng đã xử lý
                });
            }
        })
        .catch(error => {
            console.error("Lỗi khi nhận phản hồi từ Telegram:", error);
        });
}

// Gửi yêu cầu xác nhận từ tư vấn viên với nút Yes/No
function requestAdvisorConfirmation() {
    const telegramToken = "7699835490:AAHXNqBbklJBgBxKBhRm2vBi2Ssjls4YVuw"; // Thay bằng token của bot Telegram
    const chatId = "7991407654"; // Thay bằng chat ID của tư vấn viên
    const telegramApiUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    return fetch(telegramApiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: "Người dùng yêu cầu hỗ trợ. Bạn có muốn hỗ trợ không?",
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "Yes", callback_data: "Yes" },
                        { text: "No", callback_data: "No" }
                    ]
                ]
            }
        })
    })
    .then(response => response.ok)
    .catch(error => {
        console.error("Lỗi khi gửi yêu cầu xác nhận từ tư vấn viên:", error);
        return false;
    });
}

// Kiểm tra phản hồi từ tư vấn viên
function checkAdvisorResponse() {
    const telegramToken = "7699835490:AAHXNqBbklJBgBxKBhRm2vBi2Ssjls4YVuw"; // Thay bằng token của bot Telegram
    const telegramApiUrl = `https://api.telegram.org/bot${telegramToken}/getUpdates`;

    return fetch(telegramApiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.ok && data.result.length > 0) {
                const updates = data.result;
                const lastUpdate = updates[updates.length - 1];
                if (lastUpdate.callback_query && lastUpdate.callback_query.data) {
                    const advisorResponse = lastUpdate.callback_query.data.trim();
                    return advisorResponse === "Yes" ? "Yes" : "No";
                }
            }
            return "No";
        })
        .catch(error => {
            console.error("Lỗi khi kiểm tra phản hồi từ tư vấn viên:", error);
            return "No";
        });
}

// Gửi tin nhắn
async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    addMessage(userMessage); // Hiển thị tin nhắn người dùng
    suggestionsContainer.innerHTML = ''; // Xóa hoàn toàn gợi ý sau khi gửi

    if (userMessage === "Tôi cần gập tư vấn viên") {
        if (!isConnectedToTelegram) {
            addMessage("Đang gửi yêu cầu đến tư vấn viên...", true); // Thông báo đang gửi yêu cầu
            const requestSent = await requestAdvisorConfirmation();

            if (requestSent) {
                addMessage("Đang chờ phản hồi từ tư vấn viên...", true); // Thông báo đang chờ phản hồi
                setTimeout(async () => {
                    const advisorResponse = await checkAdvisorResponse();
                    if (advisorResponse === "Yes") {
                        addMessage("Bạn đã được kết nối với tư vấn viên. KS Trần Minh Khoa.", true); // Thông báo kết nối thành công
                        isConnectedToTelegram = true; // Kích hoạt kết nối với Telegram
                        sendMessageToTelegram("Người dùng đã được kết nối.");
                        setTimeout(() => {
                            addMessage("KS.Trần Minh Khoa xin chào anh chị. Anh chị cho em xin tên để tiện xưng hô ạ.", true); // Gửi tin nhắn chào hỏi dưới dạng tư vấn viên
                        }, 500); // Gửi tin nhắn chào hỏi sau khi kết nối
                        setInterval(pollTelegramUpdates, 3000); // Bắt đầu nhận phản hồi từ Telegram
                    } else {
                        addMessage("Tư vấn viên hiện không thể hỗ trợ. Vui lòng để lại thông tin liên hệ, chúng tôi sẽ phản hồi bạn sớm nhất.", true); // Thông báo tư vấn viên từ chối
                    }
                }, 10000); // Chờ 5 giây để nhận phản hồi
            } else {
                addMessage("Không thể gửi yêu cầu đến tư vấn viên. Vui lòng thử lại sau.", true); // Thông báo lỗi gửi yêu cầu
            }
        }
        userInput.value = ""; // Xóa ô nhập
        return;
    }

    if (isConnectedToTelegram) {
        sendMessageToTelegram(userMessage); // Chuyển tiếp tin nhắn đến Telegram
        userInput.value = ""; // Xóa ô nhập
        return;
    }

    const contactInfo = extractContactInfo(userMessage);
    if (contactInfo) {
        sendToTelegram(contactInfo); // Gửi thông tin liên hệ đến Telegram
        setTimeout(() => {
            addMessage("Cảm ơn đã để lại thông tin liên hệ, chúng tôi sẽ phản hồi bạn sớm nhất.", true);
        }, 500);
        userInput.value = ""; // Xóa ô nhập
        return;
    }

    let botResponse = null;
    let isImageResponse = false;

    // Tìm tin nhắn có nội dung gần giống
    Object.keys(chatbotData).forEach(key => {
        if (!botResponse) {
            const similarity = calculateSimilarity(userMessage, key);
            if (similarity > 0.5) { // Ngưỡng tương đồng là 50%
                botResponse = chatbotData[key];
                if (key === "Tôi cần 1 số mẫu nhà đẹp") {
                    isImageResponse = true; // Đánh dấu nếu cần gửi ảnh
                }
            }
        }
    });

    if (!botResponse) {
        // Nếu không tìm thấy phản hồi, tạo phản hồi mặc định dựa trên từ khóa
        if (userMessage.includes("MK Home") && userMessage.includes("là gì")) {
            botResponse = chatbotData["MK Home là gì?"];
        } else if (userMessage.includes("dịch vụ") || userMessage.includes("cung cấp")) {
            botResponse = chatbotData["Dịch vụ của MK Home?"];
        } else if (userMessage.includes("liên hệ") || userMessage.includes("email") || userMessage.includes("hotline")) {
            botResponse = chatbotData["Liên hệ MK Home như thế nào?"];
        } else if (userMessage.includes("công ty") && userMessage.includes("ở đâu")) {
            botResponse = chatbotData["Công ty ở đâu?"];
        } else if (userMessage.includes("thời gian") && userMessage.includes("làm việc")) {
            botResponse = chatbotData["Thời gian làm việc của công ty?"];
        } else if (userMessage.includes("mẫu") && userMessage.includes("nhà")) {
            botResponse = chatbotData["Tôi cần 1 số mẫu nhà đẹp"];
            isImageResponse = true;
        } else if (userMessage.includes("chi phí") || userMessage.includes("giá")) {
            botResponse = chatbotData["Chi phí xây dựng nhà là bao nhiêu?"];
        } else if (userMessage.includes("thời gian") && userMessage.includes("hoàn thành")) {
            botResponse = chatbotData["Thời gian hoàn thành một dự án là bao lâu?"];
        } else if (userMessage.includes("thiết kế") && userMessage.includes("nội thất")) {
            botResponse = chatbotData["MK Home có hỗ trợ thiết kế nội thất không?"];
        } else if (userMessage.includes("vật liệu") && userMessage.includes("xây dựng")) {
            botResponse = chatbotData["Vật liệu xây dựng nào tốt nhất?"];
        } else {
            botResponse = "Xin lỗi, tôi chưa hiểu ý bạn. Bạn có thể thử hỏi một câu khác.";
        }
    }

    setTimeout(() => {
        addMessage(botResponse, true); // Hiển thị phản hồi từ bot
        if (isImageResponse) {
            addImageMessage(galleries); // Gửi tất cả ảnh từ tất cả gallery
        }
    }, 500);

    userInput.value = ""; // Xóa ô nhập
}

// Gửi tin nhắn khi nhấn nút
sendBtn.addEventListener("click", sendMessage);

// Gửi tin nhắn khi nhấn Enter
userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Cập nhật gợi ý khi người dùng nhập
userInput.addEventListener("input", showSuggestions);

const menuBtn = document.getElementById("menu-btn");
const sampleMessagesMenu = document.getElementById("sample-messages-menu");

// Hiển thị hoặc ẩn menu mẫu tin nhắn
menuBtn.addEventListener("click", () => {
    sampleMessagesMenu.classList.toggle("hidden");
    if (!sampleMessagesMenu.classList.contains("hidden")) {
        displaySampleMessagesInMenu(); // Chỉ hiển thị trong menu
    }
});

// Hiển thị các mẫu tin nhắn trong menu
function displaySampleMessagesInMenu() {
    sampleMessagesMenu.innerHTML = ""; // Xóa nội dung cũ
    const sampleMessages = Object.keys(chatbotData); // Lấy tất cả câu hỏi từ chatbotData
    sampleMessages.forEach((message) => {
        const messageElement = document.createElement("div");
        messageElement.classList.add("sample-message");
        messageElement.textContent = message;
        messageElement.onclick = () => {
            userInput.value = message; // Gán câu hỏi vào ô nhập
            sampleMessagesMenu.classList.add("hidden"); // Ẩn menu sau khi chọn
            sendMessage(); // Tự động gửi tin nhắn
        };
        sampleMessagesMenu.appendChild(messageElement);
    });
}