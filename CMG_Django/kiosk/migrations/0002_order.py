# Generated by Django 2.2.1 on 2019-06-13 07:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kiosk', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('date', models.DateTimeField()),
                ('temp', models.FloatField(max_length=3)),
                ('weth', models.CharField(max_length=20)),
            ],
        ),
    ]
