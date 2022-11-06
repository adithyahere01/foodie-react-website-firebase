const images =  ['https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGZvb2QlMjBkaXNoZXMlMjBpbWFnZXMlMjAzOTYlMkY0OTUlMjBwaXhlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                 'https://images.unsplash.com/photo-1475856033578-76b4a228f5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZvb2QlMjBkaXNoZXMlMjBpbWFnZXMlMjAzOTYlMkY0OTUlMjBwaXhlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                 'https://images.unsplash.com/photo-1485921198582-a55119c97421?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGZvb2QlMjBkaXNoZXMlMjBpbWFnZXMlMjAzOTYlMkY0OTUlMjBwaXhlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                 'https://images.unsplash.com/photo-1506802913710-40e2e66339c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNwaWN5JTIwZm9vZCUyMGRpc2hlcyUyMGltYWdlcyUyMDM5NiUyRjQ5NSUyMHBpeGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                 'https://images.unsplash.com/photo-1499638309848-e9968540da83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fGZvb2QlMjBkaXNoZXMlMjBpbWFnZXMlMjAzOTYlMkY0OTUlMjBwaXhlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                 'https://images.unsplash.com/photo-1481391145929-5bcf567d5211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNwaWN5JTIwZm9vZCUyMGRpc2hlcyUyMGltYWdlcyUyMDM5NiUyRjQ5NSUyMHBpeGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                 'https://images.unsplash.com/photo-1474045326708-cdc78c2487cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxmb29kJTIwZGlzaGVzJTIwaW1hZ2VzJTIwMzk2JTJGNDk1JTIwcGl4ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 
                 'https://images.unsplash.com/photo-1512335556279-f320d6f441b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIxfHxmb29kJTIwb24lMjBwbGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                 'https://images.unsplash.com/photo-1554298128-c916518a4b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGZvb2QlMjBvbiUyMHBsYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                 'https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGZvb2QlMjBpbWFnZXMlMjAzOTYlMkY0OTUlMjBwaXhlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',               
               'https://images.unsplash.com/photo-1475856033578-76b4a228f5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZvb2QlMjBkaXNoZXMlMjBpbWFnZXMlMjAzOTYlMkY0OTUlMjBwaXhlbHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                 'https://images.unsplash.com/photo-1501014882647-fa3cef30d47d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fHNwaWN5JTIwZm9vZCUyMGRpc2hlcyUyMGltYWdlcyUyMDM5NiUyRjQ5NSUyMHBpeGVsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                  'https://images.unsplash.com/photo-1474045326708-cdc78c2487cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxmb29kJTIwZGlzaGVzJTIwaW1hZ2VzJTIwMzk2JTJGNDk1JTIwcGl4ZWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
]
const items = [
   {
    id: "01",
    name: "cookies",
    price: 120,
    image: images[1],
    featured: false,
    category: "snacks"
   },
   {
    id: "02",
    name: "veg toast",
    price: 59,
    image: images[2],
    featured: false,
    category: "breakfast"
   },
   {
    id: "03",
    name: "chinese prawn",
    price: 259,
    image: images[0],
    featured: false,
    category: "lunch"
   },
   {
    id: "04",
    name: "berry juice",
    price: 159,
    image: images[3],
    featured: false,
    category: "snacks"
   },
   {
    id: "05",
    name: "cookie creame twist",
    price: 259,
    image: images[4],
    featured: false,
    category: "breakfast"
   },
   {
    id: "06",
    name: "cup cake",
    price: 259,
    image: images[5],
    featured: false,
    category: "snacks"
   },
   {
    id: "07",
    name: "apple pie cake",
    price: 259,
    image: images[6],
    featured: false,
    category: "lunch"
   }
   ,{
    id: "08",
    name: "Coco cake",
    price: 259,
    image: images[7],
    featured: false,
    category: "dessert"
   },
   {
    id: "09",
    name: "bread cake",
    price: 259,
    image: images[8],
    featured: false,
    category: "breakfast"
   },
   {
    id: "10",
    name: "egg bread",
    price: 120,
    image: images[9],
    featured: true,
    category: "lunch"
   },
   {
    id: "11",
    name: "cookies",
    price: 199,
    image: images[10],
    featured: true,
    category: "snacks"
   },
   {
    id: "12",
    name: "icecream stick",
    price: 259,
    image: images[11],
    featured: false,
    category: "snacks"
   },
   {
    id: "13",
    name: "bakes & shakes",
    price: 259,
    image: images[12],
    featured: true,
    category: "breakfast"
   }
]

export default items


