FROM python:3.12

WORKDIR /app

RUN pip install Flask==3.0.2

COPY service-a/ .

EXPOSE 5000
CMD ["python3", "app.py"]
