# Generated by Django 4.0.3 on 2022-10-27 21:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0014_alter_serviceappointment_finished'),
    ]

    operations = [
        migrations.AddField(
            model_name='automobilevo',
            name='sold',
            field=models.BooleanField(default=False, null=True),
        ),
    ]