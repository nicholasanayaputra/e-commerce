const allProducts = [
    {
        id: 1,
        name: "Syltherine",
        desc: "Stylish cafe chair",
        price: 2500000,
        disc: "Rp 3.500.000",
        category: "table",
        image: "https://images.unsplash.com/photo-1537182534312-f945134cce34?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        name: "Leviosa",
        desc: "Stylish cafe chair",
        price: 2500000,
        category: "table",
        image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        name: "Lolito",
        desc: "Luxury big sofa",
        price: 7000000,
        disc: "Rp 14.000.000",
        category: "sofa",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        name: "Respira",
        desc: "Outdoor bar table and stool",
        price: 500000,
        category: "table",
        image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1409&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        name: "Grifo",
        desc: "Night lamp",
        price: 1500000,
        disc: "Rp 3.500.000",
        category: "lamp",
        image: "https://images.unsplash.com/photo-1570974802254-4b0ad1a755f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 6,
        name: "Muggo",
        desc: "Small kitchen",
        price: 150000,
        category: "kitchen",
        image: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 7,
        name: "Cute chair",
        desc: "Stylish cafe chair",
        price: 200000,
        disc: "Rp 14.000.000",
        category: "table",
        image: "https://images.unsplash.com/photo-1609510368600-883b7f16d121?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 8,
        name: "Potty",
        desc: "Minimalist flower pot",
        price: 500000,
        category: "sofa",
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 9,
        name: "Syltherine",
        desc: "Stylish cafe chair",
        price: 2500000,
        disc: "Rp 3.500.000",
        category: "table",
        image: "https://images.unsplash.com/photo-1605239435870-67df4c54a0b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 10,
        name: "Leviosa",
        desc: "Stylish cafe chair",
        price: 2500000,
        category: "table",
        image: "https://images.unsplash.com/photo-1611306133964-f06d181327fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 11,
        name: "Lolito",
        desc: "Luxury big sofa",
        price: 7000000,
        category: "sofa",
        image: "https://plus.unsplash.com/premium_photo-1661765778256-169bf5e561a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 12,
        name: "Respira",
        desc: "Outdoor bar table and stool",
        price: 500000,
        category: "table",
        image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=1409&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 13,
        name: "Grifo",
        desc: "Night lamp",
        price: 1500000,
        disc: "Rp 3.500.000",
        category: "lamp",
        image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 14,
        name: "Muggo",
        desc: "Small kitchen",
        price: 150000,
        category: "kitchen",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 15,
        name: "Cute chair",
        desc: "Stylish cafe chair",
        price: 200000,
        category: "table",
        image: "https://plus.unsplash.com/premium_photo-1668073438984-6f9f2e3e9aa0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 16,
        name: "Potty",
        desc: "Minimalist flower pot",
        price: 500000,
        category: "sofa",
        image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 17,
        name: "Syltherine",
        desc: "Stylish cafe chair",
        price: 2500000,
        disc: "Rp 3.500.000",
        category: "table",
        image: "https://plus.unsplash.com/premium_photo-1674815327724-2330a6391483?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 18,
        name: "Leviosa",
        desc: "Stylish cafe chair",
        price: 2500000,
        category: "table",
        image: "https://images.unsplash.com/photo-1604145195376-e2c8195adf29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]

export default allProducts