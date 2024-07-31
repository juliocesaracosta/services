FROM python:3.12

WORKDIR /app

RUN pip install Flask==3.0.2

COPY service-b/ .

EXPOSE 3000
CMD ["python3", "app.py"]