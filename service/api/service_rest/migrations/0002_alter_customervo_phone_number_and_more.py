# Generated by Django 4.0.3 on 2022-10-24 21:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customervo',
            name='phone_number',
            field=models.PositiveIntegerField(max_length=20, unique=True),
        ),
        migrations.AlterField(
            model_name='technician',
            name='employee_number',
            field=models.IntegerField(unique=True),
        ),
        migrations.CreateModel(
            name='ServiceAppointment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('appointment_date', models.DateField(auto_now_add=True)),
                ('service_reason', models.CharField(max_length=250)),
                ('VIN', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='VIN', to='service_rest.automobilevo')),
                ('assigned_technician', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='technician', to='service_rest.technician')),
                ('customer_name', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Customer', to='service_rest.customervo')),
            ],
        ),
    ]
