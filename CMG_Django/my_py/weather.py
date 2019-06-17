from bs4 import BeautifulSoup
import urllib.request
def getWeather():
    with urllib.request.urlopen(
        "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EB%B0%98%ED%8F%AC3%EB%8F%99+%EB%82%A0%EC%94%A8") as response:
        html = response.read()
        soup = BeautifulSoup(html, 'html.parser')
    getcontent=soup.find('p', {'class':'cast_txt'}).text.split(',')
    return getcontent[0]