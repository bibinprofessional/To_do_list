# Generated by Django 4.2.6 on 2023-10-15 22:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_alter_tasks_complete'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tasks',
            name='complete',
            field=models.BooleanField(blank=True, default=False),
        ),
    ]
