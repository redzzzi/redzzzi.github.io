반동하는 듯한 효과
```css
@keyframes pop {
    50% {transform: scale(1.2);}
}

.say {
    flex-direction: row; /* 수평 정렬 */
    min-width: 300px;
    height: 300px;
    align-items: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
        animation: pop 0.5s linear 1; // 이 부분 중요
    }
}
```