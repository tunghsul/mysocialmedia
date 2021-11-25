# My Social Media

## **Prerequisite**

- Node JS v16.13.0
- wrangler 1.19.5

## **API Endpoints**


### **GET** `/api/posts`

Get all posts

### **Resquest Body**
None

### **Response Body**


|       | Data Type | Optional |
|-------|:---------:|----------|
| posts | Post[]    | false    |


|            |  Data Type | Optional |
|------------|:----------:|----------|
| id         | string     | false    |
| title      | string     | false    |
| username   | string     | false    |
| content    | string     | false    |
| userAvatar | string     | true     |
| createdAt  | number     | false    |
| images     | string[]   | false    |


### **Example**

```json
{
    "posts": [
        {
            "id": "1004639b-c6bc-482e-a517-4b5c538a46e8",
            "title": "My name is Kuro",
            "username": "Kuro",
            "content": "I am a 屁孩",
            "userAvatar": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QB...",
            "createdAt": 1637796552059,
            "images":["data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/"]
        },
        {
            "id": "2f39dff0-3ed9-428c-b71a-0bec2ecf558d",
            "title": "Testing post",
            "username": "Elena",
            "content": "test",
            "userAvatar": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBYR...",
            "createdAt": 1637801410119,
            "images":[]
        }
    ]
}
```

## **GET** `/api/comments`

Get all comments

### **Resquest Body**
None

### **Response Body**
|          | Data Type | Optional |
|----------|:---------:|----------|
| comments | Comment[] | false    |

|            | Data Type | Optional |
|------------|:---------:|----------|
| postId     | string    | false    |
| username   | string    | false    |
| content    | string    | false    |
| userAvatar | string    | true     |
| createdAt  | number    | false    |

### **Example**

```json
{
    "comments": [
        {
            "postId": "e968522a-b363-4710-b960-1420508bf910",
            "username": "Tony",
            "content": "ABCDE",
            "userAvatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEU...",
            "createdAt": 1637736851070,
            "id": "03638216-cd01-43eb-806a-71f8379de169"
        },
        {
            "postId": "e968522a-b363-4710-b960-1420508bf910",
            "username": "Tony",
            "content": "abcde",
            "userAvatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjQAAAI0CAMAAA...",
            "createdAt": 1637736854662,
            "id": "3873963b-6521-4884-85db-f77093ea2d73"
        }
    ]
}
```

## **POST** `/api/posts`

Create a new post

### **Resquest Body**

|            |  Data Type | Optional |
|------------|:----------:|----------|
| id         | string     | false    |
| title      | string     | false    |
| username   | string     | false    |
| content    | string     | false    |
| userAvatar | string     | true     |
| createdAt  | number     | false    |
| images     | string[]   | false    |

### **Example**
```json
{
    "id": "1004639b-c6bc-482e-a517-4b5c538a46e8",
    "title": "Hello",
    "username": "Tony",
    "content": "This is my first post",
    "createdAt": 1637747542887,
    "image": [],
}
```

### **Response Body**

- Success Example

```json
{
    "message": "success",
    "id": "7fcf2e2e-56f4-446e-8c76-9ee6e1c92fb3"
}
```

- Error Example

```json
{
    "message": "400 Bad request",
}
```
the error returned with using the following format when server received one the field(title, username, content) is falsey


## **POST** `/api/comments`

Create a new comment

### **Resquest Body**

|            | Data Type | Optional |
|------------|:---------:|----------|
| postId     | string    | false    |
| username   | string    | false    |
| content    | string    | false    |
| userAvatar | string    | true     |
| createdAt  | number    | false    |

### **Example**

```json
{
    "postId": "1004639b-c6bc-482e-a517-4b5c538a46e8",
    "username": "Elena",
    "content": "Wow wow, so cute!",
    "createdAt": 1637747543000,
}
```

### **Response Body**

- Success Example

```json
{
    "message": "success"
}
```

- Error Example

```json
{
    "message": "400 Bad request",
}
```
the error returned with using the following format when server received one the field(title, username, content) is falsey