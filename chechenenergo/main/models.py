from django.db import models

class Articles(models.Model):
    image = models.ImageField(upload_to='media/', null=True, blank=True)
    title = models.CharField('Название', max_length = 150)
    anons = models.CharField('Анонс', max_length = 150)
    full_text = models.TextField('Статья')
    date = models.DateTimeField('Дата публикации')
    

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = "Новость"
        verbose_name_plural = "Новости"

