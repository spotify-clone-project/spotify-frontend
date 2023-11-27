import os
from mutagen.mp3 import MP3
from mutagen.id3 import ID3, APIC, USLT

# 디렉토리 경로 설정
directory_path = "/Users/UK/Desktop/Melon/"

# 디렉토리 내의 모든 파일 검색
for root, dirs, files in os.walk(directory_path):
    for file in files:
        if file.endswith(".mp3"):
            mp3_path = os.path.join(root, file)
            
            # MP3 파일 열기
            audio = MP3(mp3_path, ID3=ID3)
            
            # 이미지 추출
            for tag in audio.tags.values():
                if isinstance(tag, APIC):
                    thumbnail_path = os.path.splitext(mp3_path)[0] + ".jpg"
                    with open(thumbnail_path, "wb") as img:
                        img.write(tag.data)
                    break
            
            # 가사 추출
            lyrics = None
            if "USLT::'eng'" in audio:
                lyrics = audio["USLT::'eng'"].text
                lyrics_path = os.path.splitext(mp3_path)[0] + ".txt"
                with open(lyrics_path, "w") as lyrics_file:
                    lyrics_file.write(lyrics)

print("썸네일 이미지와 가사 추출이 완료되었습니다.")
