# Generated by Django 4.0.3 on 2022-10-26 19:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0011_serviceappointment_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='serviceappointment',
            name='finished',
            field=models.BooleanField(null=True),
        ),
    ]
